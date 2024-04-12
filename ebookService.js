import {GridActionEbook} from "./GridActionEbook";

let ebookService = {};

let book;
let globalToc;
let currentChapter = 0;
let rendition;
let fontPercent = 100;

ebookService.doAction = function (action) {
    switch (action.action) {
        case GridActionEbook.actions.EB_OPEN:
            ebookService.open(action);
            break;
    }
}

ebookService.open = async function(action) {
    book = ePub();
    await book.open("");
    rendition = book.renderTo("player", {
        width: 700,
        height: 100,
        allowScriptedContent: true
    });
}