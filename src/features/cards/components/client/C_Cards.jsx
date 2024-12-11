"use client"

import DetailedCard from "@/features/cards/components/card/DetailedCard.jsx";
import { currentCategoryTagsAtom } from "@/features/cards/stores/AtomStore";
import Fuse from 'fuse.js';
import { useAtom } from "jotai";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const C_Cards = ({children, cardConfigurations, categoryTags}) => {
  const [_, setCurrentCategoryTagsAtom] = useAtom(currentCategoryTagsAtom)
  useEffect(() => { // currentCategoryTagsAtom is used in the layout, the parent of this component. Using useEffect prevent us from having an infinite loop
    setCurrentCategoryTagsAtom(categoryTags)
  }, [])
  
  const [CardsConfigs, setCardConfigs] = useState(cardConfigurations)
  const recommendedOrder = cardConfigurations
  const searchParams = useSearchParams()
  const currentSort = searchParams.get("sort") || "";
  const currentSearchFilter = searchParams?.get("search") || ""
  let currentTagFilters = searchParams?.get("filters")?.split(',') || []
  
  const sortCards = () => {
    if (currentSort === "Vote") return ([...cardConfigurations].sort((a, b) => a.score - b.score))
    else if (currentSort === "Recommended") return recommendedOrder
    else if (currentSort === "Popularity") return recommendedOrder
  }

  const searchFilterCards = () => {
    let finalOutput = CardsConfigs
    const fuse = new Fuse(sortCards() || CardsConfigs, {keys: ['title'], threshold: 0.3,});
    let filteredCards = fuse.search(currentSearchFilter).map(result => result.item);
    
    if (!filteredCards[0] && !currentSearchFilter[0]) return CardsConfigs
    finalOutput = filteredCards
    return finalOutput
  }

  const tagFilterCards = () => { // More on the notes/docs "PW - Cards feature"
    let finalOutput = []
    CardsConfigs.forEach((card) => { 
      if (!card.Tags) return
      card.Tags.forEach((tagsCategory, iTagCategory) => { // if card has any of the selected filters in any tagCategory, it will be added to finalOutput
        if (finalOutput.includes(card)) return
        currentTagFilters.forEach((currentTagFilter) => {
          const [key] = Object.keys(tagsCategory);
          const cardTags = tagsCategory[key]
          if (!cardTags.includes(currentTagFilter)) return
          
          const index = CardsConfigs.findIndex(item => item.title === card.title);
          const cardToAdd = CardsConfigs[index]
          finalOutput.push(cardToAdd)
        })
      })
    })
    return finalOutput
  }

  const mergeFilters = () => { 
    let filteredCards = tagFilterCards()
    let searchedCards = searchFilterCards()
    let commonCards

    if (currentTagFilters[0] === "") currentTagFilters.shift()

    if (!currentTagFilters[0] && !currentSearchFilter) commonCards = CardsConfigs
    else if (!currentTagFilters[0]) commonCards = searchedCards
    else if (!currentSearchFilter) commonCards = filteredCards
    else {
      commonCards = filteredCards.filter((card) => {
        return searchedCards.some(c => JSON.stringify(c) === JSON.stringify(card)); // can't compare objects normally in js...
      });
    }

    const CardsContainer = document.querySelectorAll(".cards-wrapper2 article")
    
    CardsContainer.forEach((cardOnClient, i) => {
      if (!commonCards[0]) return cardOnClient.classList.add('hidden')
        
      const visibleCardTitle = cardOnClient.querySelector('.card-title').textContent;
      let isCardVisible = false
      commonCards.forEach((commonCard) => {
        if (commonCard.title === visibleCardTitle) {
          isCardVisible = true
          return cardOnClient.classList.remove('hidden')
        } 
        else if (isCardVisible) return
        else return cardOnClient.classList.add('hidden')
      })
    })
  }
  
  useEffect(() => {
    let sortedCards = sortCards()
    if (sortedCards) setCardConfigs(sortedCards)
  }, [currentSort])

  useEffect(() => {
    mergeFilters()
  }, [currentSearchFilter])

  useEffect(() => {
    mergeFilters()
  }, [currentTagFilters])

  return (
    <div className="flexy !items-start gap-[100px] sm:gap-[58px] flex-wrap cards-wrapper2">
      {CardsConfigs.map((cardConfig, index) => <DetailedCard config={cardConfig} key={index}/>) || null}
    </div>
  )
}

export default C_Cards