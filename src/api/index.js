import axios from "axios";

let url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let geturl=url;
  if (country){
    geturl = `${url}/countries/${country}`;
  }
    try {
      const {
        data: { confirmed, recovered, deaths, lastUpdate },
      } = await axios.get(geturl);
      return { confirmed, recovered, deaths, lastUpdate };
    } catch {}
};


export const fetchDailyData = async () => {
  
  try {
    const {data} = await axios.get(`${url}/daily`);
    const results = data.map((item) => {
      return {
        confirmed: item.confirmed.total,
        deaths: item.deaths.total,
        reportDate: item.reportDate,
      };
    });
    return results;
  } catch {}
};


export const fetchCountries = async () => {
  try {
    const { data:{countries} } = await axios.get(`${url}/countries`);
    
   const count= countries.map(it=>{
      return {name:it.name}
    })
    return count;
  } catch {}
};
