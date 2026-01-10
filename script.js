const apiKey = `9dfcdc7c5b8c1df68d4c5dc87a917e6d`;

console.log("Weather Website Loaded");


const weather_data = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9dfcdc7c5b8c1df68d4c5dc87a917e6d`;
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    if (data.cod !== 200) {
        alert("City not found! Please enter a valid city name.");
        throw new Error("City not found");
    }
    return data;
};

/*const weather_data_2 = async () => {
    let response = await fetch(URL_2);
    console.log(response);
    let data = await response.json();
    console.log(data);
    return data;
    };*/


const Temperature_data = async (city) => {
    let data = await weather_data(city);
    let Temp = document.getElementById("temp_data");
    Temp.innerText = Math.floor(data.main.temp - 273.15) + "°";
};

const City_data = async (city) => {
    let data = await weather_data(city);
    let City = document.getElementById("city_data");
    City.innerText = data.name;
};

const Min_max_data = async (city) => {
    let data = await weather_data(city);
    let Temp = document.getElementById("min_max");
    Temp.innerText = "Min: " + Math.floor(data.main.temp_min - 273.15) + "°" + " " + "Max: " + Math.floor(data.main.temp_max - 273.15) + "°";
};

const Feels_like_data = async (city) => {
    let data = await weather_data(city);
    let Feels_like = document.getElementById("feels_like_data");
    Feels_like.innerText = Math.floor(data.main.feels_like - 273.15) + "°";
};

const Wind_speed_data = async (city) => {
    let data = await weather_data(city);
    let Wind_speed = document.getElementById("wind_speed_data");
    Wind_speed.innerText = Math.floor(data.wind.speed * 3.6) + " km/h";
};

const Visibility_data = async (city) => {
    let data = await weather_data(city);
    let Visibility = document.getElementById("visibility_data");
    Visibility.innerText = Math.floor(data.visibility / 1000) + " km";
};

const Humidity_data = async (city) => {
    let data = await weather_data(city);
    let Humidity = document.getElementById("humidity_data");
    Humidity.innerText = data.main.humidity + "%";
};

const get_map = async (city) => {
    let data = await weather_data(city);
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    console.log("Latitude:", lat, "Longitude:", lon);
    let map_data = document.getElementById("map_open");
    console.log(map_data);
    map_data.href = `https://earth.nullschool.net/#current/wind/surface/level/orthographic=${lon},${lat},5000/loc=${lon},${lat}`;
}

const moon_image = async () => {
    let moon = document.getElementById("moon_image");
    let date = new Date();
    const moon_day_01_08_2025 = 5101;
    let moon_day = moon_day_01_08_2025 + 24 * (date.getDate() - 1);
    moon.src = `https://moon.nasa.gov/mvg.2025/${moon_day}.jpg`;
    console.log("Moon image updated:", moon.src);
}

const sun_animation = async (city) => {
    let data = await weather_data(city);
    const centre_left = 115;
    const centre_bottom = -20;
    const sun_rise = data.sys.sunrise;
    const sun_set = data.sys.sunset;
    let sun_time = sun_set - sun_rise;
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let total_seconds = Math.floor(Date.now() / 1000);
    let sun_coverage = 100 * (total_seconds - sun_rise) / sun_time;
    if (sun_coverage < 0) {
        sun_coverage = 0;
    }
    else if (sun_coverage > 100) {
        sun_coverage = 100;
    }
    let left = document.getElementById("sun_for_animation");
    let bottom = document.getElementById("sun_for_animation");
    let now_left = 105 * (Math.cos(Math.PI - ((Math.PI / 100) * sun_coverage))) + centre_left;
    let now_bottom = 105 * (Math.sin(Math.PI - ((Math.PI / 100) * sun_coverage))) + centre_bottom;
    left.style.left = now_left + "px";
    bottom.style.bottom = now_bottom + "px";
}


const change_color = async (city) => {
    const panel_color1 = "rgb(30, 40, 60)";
    const panel_color2 = "rgb(46, 58, 80)";
    const panel_color3 = "rgb(62, 76, 100)";
    const panel_color4 = "rgb(78, 94, 120)";
    const panel_color5 = "rgb(94, 112, 140)";
    const panel_color6 = "rgb(110, 130, 160)";
    const bg_color1 = "rgb(10, 18, 30)";
    const bg_color2 = "rgb(45, 53, 65)";
    const bg_color3 = "rgb(80, 88, 101)";
    const bg_color4 = "rgb(114, 123, 136)";
    const bg_color5 = "rgb(149, 158, 172)";
    const bg_color6 = "rgb(184, 193, 207)";

    let left_panel = document.getElementById("navigation_panel");
    let mid_panel0 = document.getElementById("main_area");
    let mid_panel1 = document.getElementById("sun_moon");
    let mid_panel2 = document.getElementById("air_conditions");
    let right_panel = document.getElementById("seven_days_forcast");
    let bg = document.getElementById("main_section");

    let data = await weather_data(city);
    const sun_rise = data.sys.sunrise;
    const sun_set = data.sys.sunset;
    let now = new Date();
    let total_seconds = Math.floor(Date.now() / 1000);
    let Difference = total_seconds - sun_rise;
    console.log("Difference in seconds:", Difference, "Sunrise:", sun_rise, "Sunset:", sun_set);

    if (Difference < 0) {
        left_panel.style.backgroundColor = panel_color1;
        mid_panel0.style.backgroundColor = bg_color1;
        mid_panel1.style.backgroundColor = panel_color1;
        mid_panel2.style.backgroundColor = panel_color1;
        right_panel.style.backgroundColor = panel_color1;
        bg.style.backgroundColor = bg_color1;
        console.log("Before sunrise, setting color to panel_color1");
    }

    else if (Difference > 0 && Difference < 750) {
        left_panel.style.backgroundColor = panel_color2;
        mid_panel0.style.backgroundColor = bg_color2;
        mid_panel1.style.backgroundColor = panel_color2;
        mid_panel2.style.backgroundColor = panel_color2;
        right_panel.style.backgroundColor = panel_color2;
        bg.style.backgroundColor = bg_color2;
        console.log("Day time, setting color to panel_color2");
    }

    else if (Difference >= 750 && Difference < 1500) {
        left_panel.style.backgroundColor = panel_color3;
        mid_panel0.style.backgroundColor = bg_color3;
        mid_panel1.style.backgroundColor = panel_color3;
        mid_panel2.style.backgroundColor = panel_color3;
        right_panel.style.backgroundColor = panel_color3;
        bg.style.backgroundColor = bg_color3;
        console.log("Day time, setting color to panel_color3");
    }

    else if (Difference >= 1500 && Difference < 2250) {
        left_panel.style.backgroundColor = panel_color4;
        mid_panel0.style.backgroundColor = bg_color4;
        mid_panel1.style.backgroundColor = panel_color4;
        mid_panel2.style.backgroundColor = panel_color4;
        right_panel.style.backgroundColor = panel_color4;
        bg.style.backgroundColor = bg_color4;
        console.log("Day time, setting color to panel_color4");
    }

    else if (Difference >= 2250 && Difference < 3000) {
        left_panel.style.backgroundColor = panel_color5;
        mid_panel0.style.backgroundColor = bg_color5;
        mid_panel1.style.backgroundColor = panel_color5;
        mid_panel2.style.backgroundColor = panel_color5;
        right_panel.style.backgroundColor = panel_color5;
        bg.style.backgroundColor = bg_color5;
        console.log("Day time, setting color to panel_color5");
    }

    else if (Difference >= 3000 && Difference < 3750) {
        left_panel.style.backgroundColor = panel_color6;
        mid_panel0.style.backgroundColor = bg_color6;
        mid_panel1.style.backgroundColor = panel_color6;
        mid_panel2.style.backgroundColor = panel_color6;
        right_panel.style.backgroundColor = panel_color6;
        bg.style.backgroundColor = bg_color6;
        console.log("Day time, setting color to panel_color6");
    }

    else if (Difference >= sun_set - sun_rise - 3750 && Difference < sun_set - sun_rise - 3000) {
        left_panel.style.backgroundColor = panel_color6;
        mid_panel0.style.backgroundColor = bg_color6;
        mid_panel1.style.backgroundColor = panel_color6;
        mid_panel2.style.backgroundColor = panel_color6;
        right_panel.style.backgroundColor = panel_color6;
        bg.style.backgroundColor = bg_color6;
        console.log("Evening time, setting color to panel_color6");
    }

    else if (Difference >= sun_set - sun_rise - 3000 && Difference < sun_set - sun_rise - 2250) {
        left_panel.style.backgroundColor = panel_color5;
        mid_panel0.style.backgroundColor = bg_color5;
        mid_panel1.style.backgroundColor = panel_color5;
        mid_panel2.style.backgroundColor = panel_color5;
        right_panel.style.backgroundColor = panel_color5;
        bg.style.backgroundColor = bg_color5;
        console.log("Evening time, setting color to panel_color5");
    }

    else if (Difference >= sun_set - sun_rise - 2250 && Difference < sun_set - sun_rise - 1500) {
        left_panel.style.backgroundColor = panel_color4;
        mid_panel0.style.backgroundColor = bg_color4;
        mid_panel1.style.backgroundColor = panel_color4;
        mid_panel2.style.backgroundColor = panel_color4;
        right_panel.style.backgroundColor = panel_color4;
        bg.style.backgroundColor = bg_color4;
        console.log("Evening time, setting color to panel_color4");
    }

    else if (Difference >= sun_set - sun_rise - 1500 && Difference < sun_set - sun_rise - 750) {
        left_panel.style.backgroundColor = panel_color3;
        mid_panel0.style.backgroundColor = bg_color3;
        mid_panel1.style.backgroundColor = panel_color3;
        mid_panel2.style.backgroundColor = panel_color3;
        right_panel.style.backgroundColor = panel_color3;
        bg.style.backgroundColor = bg_color3;
        console.log("Evening time, setting color to panel_color3");
    }

    else if (Difference >= sun_set - sun_rise - 750 && Difference < sun_set - sun_rise) {
        left_panel.style.backgroundColor = panel_color2;
        mid_panel0.style.backgroundColor = bg_color2;
        mid_panel1.style.backgroundColor = panel_color2;
        mid_panel2.style.backgroundColor = panel_color2;
        right_panel.style.backgroundColor = panel_color2;
        bg.style.backgroundColor = bg_color2;
        console.log("Evening time, setting color to panel_color2");
    }
    else if (Difference > (sun_set - sun_rise)) {
        left_panel.style.backgroundColor = panel_color1;
        mid_panel0.style.backgroundColor = bg_color1;
        mid_panel1.style.backgroundColor = panel_color1;
        mid_panel2.style.backgroundColor = panel_color1;
        right_panel.style.backgroundColor = panel_color1;
        bg.style.backgroundColor = bg_color1;
        console.log("Night time, setting color to panel_color1");
    }
    else {
        left_panel.style.backgroundColor = panel_color6;
        mid_panel0.style.backgroundColor = bg_color6;
        mid_panel1.style.backgroundColor = panel_color6;
        mid_panel2.style.backgroundColor = panel_color6;
        right_panel.style.backgroundColor = panel_color6;
        bg.style.backgroundColor = bg_color6;
        console.log("Default color");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const hide_loader = () => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.display = "none"; // force hide
            console.log("Loader hidden");
        }
    };

    const call_functions = async (city) => {
        try {
            await Temperature_data(city);
            await City_data(city);
            await Min_max_data(city);
            await Feels_like_data(city);
            await Wind_speed_data(city);
            await Visibility_data(city);
            await Humidity_data(city);
            await get_map(city);
            await moon_image();
            await sun_animation(city);
            await change_color(city);
        } catch (err) {
            console.error(err);
            alert("Failed to load weather data.");
        } finally {
            hide_loader(); // always hide
        }
    };

    const get_city_name = () => {
        let input = document.getElementById("city_input");
        const searchBtn = document.getElementById("search_icon");

        function handleSearch() {
            const city = input.value.trim();
            if (city === "") return;
            console.log("City:", city);
            call_functions(city);
        }

        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                handleSearch();
            }
        });
        searchBtn.addEventListener("click", function () {
            handleSearch();
        });
    };



    const default_city = "Gorakhpur";
    call_functions(default_city);

    // Your search functionality
    get_city_name();
});