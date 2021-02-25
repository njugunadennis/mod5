function buildAndShowCategoriesHTML (categories) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    homeHtmlUrl,
    function (homeHtmlUrl) {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(
        categoryHtml,
        function (categoryHtml) {
          // Switch CSS class active to menu button
          // switchMenuToActive();

          var categoriesViewHtml =
            buildCategoriesViewHtml(categories,
                                    homeHtmlUrl,
                                    categoryHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}

var chosenCategoryShortName = 
                 chooseRandomCategory(categories,
                                       categoriesTitleHtml,
                                        categoryHtml);
                  var homeHtmlToInsertIntoMainPage = 
              insertProperty(homeHtmlToInsertIntoMainPage, 
                              "randomCategoryShortName",
                                chosenCategoryShortName.category.randomCategoryShortName);

              insertHtml("main-content", homeHtmlToInsertIntoMainPage);