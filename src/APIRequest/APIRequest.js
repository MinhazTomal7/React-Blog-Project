import axios from "axios"

const BaseURL = "https://basic-blog.teamrabbil.com/api";

export async function postCategories() {
    try {
        let res = await axios.get(BaseURL + "/post-categories");
        console.log("Categories response:", res); // Log the response
        if (res.status === 200) {
            return res.data;
        } else {
            console.error('Failed to fetch categories:', res.status);
            return [];
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

export async function postLatest() {
    try {
        let res = await axios.get(BaseURL + "/post-newest");
        console.log("Latest posts response:", res); // Log the response
        if (res.status === 200) {
            return res.data;
        } else {
            console.error('Failed to fetch latest posts:', res.status);
            return [];
        }
    } catch (error) {
        console.error('Error fetching latest posts:', error);
        return [];
    }
}
