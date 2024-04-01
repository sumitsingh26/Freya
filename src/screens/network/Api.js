export const Api = async(data,api) => {
    let result = await fetch("https://api.caroloom.com/"+api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),

      });
      return result.json();
}

export const otpEmail = async(data,api) => {
    let result = await fetch("https://api.caroloom.com/"+api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),

      });
      return result.json();
}

export const otpMobile = async(data,api) => {
  let result = await fetch("https://api.caroloom.com/"+api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),

    });
    return result.json();
}

export const loginUser = async(data,api) => {
  let result = await fetch("https://api.caroloom.com/"+api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),

    });
    return result.json();
}