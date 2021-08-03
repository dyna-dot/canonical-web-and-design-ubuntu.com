function enableApplyFilters() {
  const filtersSelected = [];
  const filters = document.querySelectorAll(".js-enable-apply-filters");
  filters.forEach((filter) => {
    filter.addEventListener("change", () => {
      if (!filtersSelected.includes(filter)) {
        filtersSelected.push(filter);
      } else {
        const index = filtersSelected.indexOf(filter);
        filtersSelected.splice(index, 1);
      }
      const button = document.querySelector(".js-apply-filters");
      if (filtersSelected.length) {
        button.removeAttribute("disabled");
      } else {
        button.disabled = true;
      }
    });
  });

  function displayFilterCount() {
    const accordion = document.querySelector(".js-filter-count");
    const accordionTabs = accordion.querySelectorAll(".p-accordion__tab");
    accordionTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        let categoryFilterCount = 0;
        let vendorFilterCount = 0;
        let releaseFilterCount = 0;
        filtersSelected.forEach((filter) => {
          if (filter.id === "category-filter") {
            categoryFilterCount++;
          } else if (filter.id === "vendor-filter") {
            vendorFilterCount++;
          } else if (filter.id === "release-filter") {
            releaseFilterCount++;
          }
        });
        const chip = tab.querySelector(".p-round-chip");
        chip.classList.toggle("u-hide");

        const categoryChipValue = tab.querySelector("#category-count");
        if (categoryChipValue) {
          categoryChipValue.innerHTML = categoryFilterCount;
        }
        const vendorChipValue = tab.querySelector("#vendor-count");
        if (vendorChipValue) {
          vendorChipValue.innerHTML = vendorFilterCount;
        }
        const releaseChipValue = tab.querySelector("#release-count");
        if (releaseChipValue) {
          releaseChipValue.innerHTML = releaseFilterCount;
        }

        // Add line break in title to keep chip on same line
        const header = tab.querySelector(".p-certification-header");
        if (header.innerHTML.includes("Certified")) {
          if (!chip.classList.contains("u-hide")) {
            header.innerHTML = "Certified Ubuntu <br> release";
          } else {
            header.innerHTML = "Certified Ubuntu release";
          }
        }
      });
    });
  }
  displayFilterCount();
}

enableApplyFilters();

//function to ensure only the option which has been changed is appended to the URL
function updateResultsPerPage() {
  let resultsDropdowns = document.querySelectorAll(".p-results-per-page");
  resultsDropdowns.forEach((resultsDropdown) => {
    const options = resultsDropdown.querySelectorAll("option");
    options.forEach((option) => {
      if (option.selected) {
        if (option.value === resultsDropdown.dataset.limit) {
          resultsDropdown.name = "";
        }
        searchResults.submit();
      }
    });
  });
}

function toggleVendorsList() {
  const vendorSection = document.querySelector("#vendor-section");
  const vendorPanel = vendorSection.querySelector(".p-accordion__panel");
  const toggleVendorButtons = document.querySelectorAll(".js-reveal-vendors");
  toggleVendorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo(0, 360);
      vendorPanel.classList.toggle("is-collapsed__vendors");
      toggleVendorButtons.forEach((button) => {
        button.classList.toggle("u-hide");
      });
    });
  });
}
toggleVendorsList();

function toggleVersionsList() {
  const versionSection = document.querySelector("#version-section");
  const versionPanel = versionSection.querySelector(".p-accordion__panel");
  const toggleVersionButtons = document.querySelectorAll(".js-reveal-versions");
  toggleVersionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      versionPanel.classList.toggle("is-collapsed__versions");
      toggleVersionButtons.forEach((button) => {
        button.classList.toggle("u-hide");
      });
    });
  });
}
toggleVersionsList();

//hides "show all .." and "show fewer" links when the accordion is closed
function toggleShowAllLinks() {
  const filterSections = document.querySelectorAll(
    ".p-accordion__group--certified"
  );
  filterSections.forEach((filterSection) => {
    const tab = filterSection.querySelector(".p-accordion__tab");
    tab.addEventListener("click", () => {
      const links = filterSection.querySelector(".js-toggle-links");
      if (links) {
        links.classList.toggle("u-hide");
      }
    });
  });
}
toggleShowAllLinks();
