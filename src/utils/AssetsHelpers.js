export const removeCSSClass = (ele, cls) => {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
}

export const addCSSClass = (ele, cls) => {
    ele.classList.add(cls);
}

export const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;


export const getProductURL = pathname => window._ENV_.REACT_APP_API_BASE_URL + "/products/image/get?imgPath=" + pathname
