const input = `
HEALTH: Fried foods
HEALTHCARE: Fast food

CULTURE: Cooking skills
`;

const process = () => {
  const lines = input.split('\n')
    .filter(l => l.length > 0)
    .map(l => {
      const m = l.match(/([a-zA-Z]+): ([a-z A-Z\-,]+)/);
      if (m) {
        const [match, type, desc] = m;
        const t = `${type[0]}${type.slice(1).toLowerCase()}`;
        return `
          outcomeDesc: "${desc}",
          outcomeType: OutcomeType.${t},
          link: ""
        `
      } else {
        return l;
      }
    });
  return lines;
};

const out = process();
out.forEach(l => {
  console.log(l);
});
