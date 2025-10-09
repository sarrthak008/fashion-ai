

const ganarateSuggestions = (user_prompt="simple black white dress") =>{

    return `

You are a fashion stylist for a modern clothing store.

A customer said: "${user_prompt}"

Using ONLY the following clothing items from our store, suggest 1 or 2 stylish and appropriate outfit combinations for this occasion.

Inventory:
- Tops: Navy blazer, White dress shirt, Beige kurta, Black turtleneck
- Bottoms: Formal black trousers, Slim-fit chinos, White pajama pants
- Footwear: Brown leather loafers, Black dress shoes, Traditional mojaris
- Accessories: Gold pocket square, Leather belt, Silver watch

Instructions:
- Use only the items listed above.
- Suggest complete outfits (top, bottom, footwear, accessories).
- Each outfit must be suitable for a marriage event (can be formal or traditional).
- Briefly explain why each outfit works well.

Respond in this format:

Outfit 1:
- Top: ...
- Bottom: ...
- Footwear: ...
- Accessories: ...
- Why it works: ...

Outfit 2:
- Top: ...
- Bottom: ...
- Footwear: ...
- Accessories: ...
- Why it works: ...

    `
}



export default ganarateSuggestions;