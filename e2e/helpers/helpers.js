const elementByText = (text) => {
    return element(by.text(text))
}
const elementById = (id) => {
    return element(by.id(id))
}
const elementByLabel = (label) => {
    return element(by.label(label))
}
const elementByTraits = (trait) => {
    return element(by.traits(trait))
}
const elementByType = (type) => {
    return element(by.type(type))
}
const elementBy = (type, content) => {
    return element(by[type](content))
}
const elementByMultiple = ({ elType, elContent, secElType, secElContent }) => {
    return element(by[elType](elContent).and(by[secElType](secElContent)))
}
const elementWithAncestor = ({ elType, elContent, ancestorType, ancestorContent }) => {
    return element(by[elType](elContent).withAncestor(by[ancestorType](ancestorContent)))
}
const elementWithDescendant = ({ elType, elContent, descendantType, descendantContent }) => {
    return element(by[elType](elContent).withAncestor(by[descendantType](descendantContent)))
}

module.exports = { 
    elementById, 
    elementByText, 
    elementByLabel,
    elementByTraits,
    elementByType,
    elementBy,
    elementByMultiple,
    elementWithAncestor,
    elementWithDescendant
}