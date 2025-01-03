## How does it generally work?
- `getMDFromLexical` gives raw MD/MDX to our functions on `@/lib/mdx` that will take care of the processing and rendering
## Why like this?
- We want control over the MD/MDX using fancy plugins and custom components because it's funny and this project needs to be over-engineered anyway
## Known problems
- Copy-pasting from other sources can add unwanted formatting automatically
  - Problem: copy-pasting from VScodium to the lexical editor can cause some text to get bold or italic formatting automatically. This might break the page because you get stuff like: `<*Boxy*>whatever</ *Boxy*>` while it should be `<Boxy>whatever</Boxy>`
    - Solution: to be sure enough, select the entire copied text and enable to then disable both bold & italic right after (there might be other formatting we haven't discovered yet)
  - Problem: some tables break because lexical thinks that every row is its own paragraph separating it from the table and disregarding it as a table altogether.
    - Solution: use `shift + space` to use non-breaking spaces so that lexical will understand that it's a table and not many paragraphs one after the other
- Tabbing & alignment of text is not supported for now
### Smaller inconsistencies
- Lexical x Payload blocks still don't work for now
- Copy-pasting from other sources won't show the preview of the formatting in the editor
  - e.g. ##MyH2 will be visible literally only as `##Myh2`, it won't be shown as `Myh2` with the formatting for a h2 tag
- In dev, some buttons of the editor don't work consistently
