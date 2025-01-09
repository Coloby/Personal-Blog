import { visit } from 'unist-util-visit';

export default function remark_env() { 
  return (tree) => {
    // makes .env work on links like: [CS - Computer Science](process.env.NEXT_PUBLIC_NOTES_WEBSITE_URL/PublicNotes/CS---Computer-Science)
      visit(tree, 'link', (node) => { 
        node.url = node.url.replace(/process\.env\.(\w+)/g, (matchingString, envVariable) => {
          return process.env[envVariable] || matchingString;
        });
      });
    // 
      
  };
}
