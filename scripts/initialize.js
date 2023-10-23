// ES Modules - Exporting functions
import { getHolidays, filterHolidaysByMonth } from './project.js';

// Function to initialize the application
const initialize = () => {
    const countries = [ // Populate dropdown for Country
        //{country code, country name}
        { code: "af", name: "Afghanistan" },
        { code: "al", name: "Albania" },
        { code: "dz", name: "Algeria" },
        { code: "as", name: "American Samoa" }
    ];

    // Populate the country selection dropdown
    const countryElement = document.getElementById('country');
    countryElement.innerHTML = '<option value=""> </option>';

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.text = country.name;
        countryElement.appendChild(option);
    });

    // Add event listeners for button clicks and month filter changes
    document.getElementById('getHolidaysButton').addEventListener('click', getHolidays);
    document.getElementById('monthFilter').addEventListener('change', filterHolidaysByMonth);
}

// Run the initialization when the DOM is ready
document.addEventListener('DOMContentLoaded', initialize);