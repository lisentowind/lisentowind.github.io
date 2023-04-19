export const useGetLocation = () => {
    // 获取当前系统ip
    const getIp = async () => {
        const res = await fetch('https://api.ipify.org?format=json')
        const data = await res.json()
        return data.ip
    }

    // 根据ip获取地理位置
    const getCity = async (ip: string) => {
        const res = await fetch(`https://ipapi.co/${ip}/json/`)
        const data = await res.json()
        return data.city
    }
    return {
        getIp,
        getCity
    }
}