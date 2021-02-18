export const backgroundColor = '#ccc8bc';
export const primaryFont = 'Helvetica';

export const formatPropertyType = (prop_type) => {
  if (prop_type === 'single_family') {
    return 'House'
  } else {
    return prop_type.slice(0, 1).toUpperCase() + prop_type.slice(1)
  }
}

export const insertCommas = (number) => {
  let numberString = number.toString();
  let sectionsBetweenCommas = [];

  let section = '';
  for (let i = numberString.length - 1; i >=0; i--) {
    section = numberString[i] + section;
    
    if (section.length === 3 || i === 0) {
      sectionsBetweenCommas.unshift(section);
      section = ''
    }
  }

  return sectionsBetweenCommas.join(',')
}