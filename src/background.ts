import { Client } from "@notionhq/client";
import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import { removeHyphen } from "./libs/utils";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveword",
    title: "Save",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(
  (info: chrome.contextMenus.OnClickData) => {
    if (info.menuItemId === "saveword") {
      chrome.storage.local.get(["dbId", "apiSec"], (res) => {
        const notion = new Client({
          auth: res.apiSec,
        });
        const requestBody: CreatePageParameters = {
          parent: {
            type: "database_id",
            database_id: res.dbId,
          },
          properties: {
            Name: {
              title: [
                {
                  text: {
                    content: String(info.selectionText),
                  },
                },
              ],
            },
          },
        };
        const createPage = async () => {
          const response = await notion.pages.create(requestBody);
          const url = `https://www.notion.so/${removeHyphen(
            res.dbId
          )}?p=${removeHyphen(response.id)}`;
        };
        try {
          createPage();
        } catch (err) {
          throw err;
        }
      });
    }
  }
);
