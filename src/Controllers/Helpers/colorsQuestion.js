export const getModuleColor = (question) => {
    let colorModule;
    if (question.module?.name === "M1") {
        colorModule = "#FBC02D"
    } else if (question.module?.name === "M2") {
        colorModule = "#43A047"
    } else if (question.module?.name === "M3") {
        colorModule = "#D81B60"
    } else if (question.module?.name === "M4") {
        colorModule = "#42A5F5"
    }
    return colorModule
}



export const getTagColor = (t) => {
    let tag = t.toUpperCase()
    let colorTag;
    // console.log(tag)
    if (tag === "JAVASCRIPT" || tag === "ESTRUCTURA DE DATOS" || tag === "ALGORITMO" || tag === "CLOSURES" || tag === "CONTEXTO DE EJECUCION" || tag === "RECURSIVIDAD" || tag === "ARBOLES" || tag === "LINKED LIST") {
        colorTag = "#FBC02D"
    } else if (tag === "SEQUELIZE" || tag === "DBMS" || tag === "BASE DE DATOS" || tag === "ORM" || tag === "MODELOS" || tag === "CRUD" || tag === "AUTENTICACION") {
        colorTag = "#42A5F5"
    } else if (tag === "EXPRESS" || tag === "TESTING" || tag === "V8" || tag === "COMMONJS" || tag === "NPM" || tag === "PROMESAS" || tag === "WEB SERVER" || tag === "JSON" || tag === "API" || tag === "ROUTES-EXPRESS" || tag === "MIDDLEWARE" || tag === "HTTP" || tag === "POSTMAN" || tag === "CORS" || tag === "GENERATOR FUNCTIONS" || tag === "`ASYNC/AWAIT") {
        colorTag = "#D81B60"
    } else {
        colorTag = "#43A047"
    }
    return colorTag
}