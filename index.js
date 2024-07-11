const table = {
    1: ["A", "J", "S"],
    2: ["B", "K", "T"],
    3: ["C", "L", "U"],
    4: ["D", "M", "V"],
    5: ["E", "N", "W"],
    6: ["F", "O", "X"],
    7: ["G", "P", "Y"],
    8: ["H", "Q", "Z"],
    9: ["I", "R"],
};

const dataMappingPassTSH = {
    duong_doi: [
        1.2,
        38.39,
        74.75,
        110.111,
        146.147,
        182.183,
        218.219,
        255.256,
        292.293,
        "332.333.334",
        366.367,
        399.4,
    ],
    su_menh: [
        7.8,
        44.45,
        80.81,
        116.117,
        152.153,
        188.189,
        225.226,
        262.263,
        "299.300.301",
        "340.341.342",
        "374.375.376",
        "406.407.408",
    ],
    ket_noi: [
        22.23, 59.6, 95.96, 131.132, 167.168, 203.204, 240.241, 277.278, 315,
        354, 388, 417,
    ],
    truong_thanh: [
        24.25, 61.62, 97.98, 133.134, 169.17, 205.206, 242.243, 279.28, 316.317,
        355.356, 389.39, 418.419,
    ],
    linh_hon: [
        3.4,
        40.41,
        76.77,
        112.113,
        148.149,
        184.185,
        "220.221.222",
        "257.258.259",
        "294.295.296",
        "335.336.337",
        "368.369.370.371",
        "401.402.403",
    ],
    nhan_cach: [
        5.6, 42.43, 78.79, 114.115, 150.151, 186.187, 223.224, 260.261, 297.298,
        338.339, 372.373, 404.405,
    ],
    su_menh: [
        7.8,
        44.45,
        80.81,
        116.117,
        152.153,
        188.189,
        225.226,
        262.263,
        "299.300.301",
        "340.341.342",
        "374.375.376",
        "406.407.408",
    ],
    nang_luc: [
        9.1,
        46.47,
        82.83,
        118.119,
        154.155,
        190.191,
        227.228,
        264.265,
        302.303,
        "343.344.345",
        "377.378.379",
        409,
    ],
    tu_duy_hop_ly: [
        13.14, 50.51, 86.87, 122.123, 158.159, 194.195, 231.232, 268.269,
        306.307, 348, 349, 350, 382, 383, 384, 412.413,
    ],
    thieu: [
        26.27,
        63.64,
        99.1,
        135.136,
        171.172,
        207.208,
        244.245,
        281.282,
        "318.319.320",
    ],
    phan_hoi_tiem_thuc: [
        15.16, 52.53, 88.89, 124.125, 160.161, 196.197, 233.234, 270.271,
        308.309, 351, 385, 414,
    ],
    diem_bao_mat: [
        17.18, 54.55, 90.91, 126.127, 162.163, 198.199, 235.236, 272.273,
        310.311, 352.353, 386.387, 415.416,
    ],
    linh_hon: [
        3.4,
        40.41,
        76.77,
        112.113,
        148.149,
        184.185,
        "220.221.222",
        "257.258.259",
        "294.295.296",
        "335.336.337",
        "368.369.370.371",
        "401.402.403",
    ],
    nhan_cach: [
        5.6, 42.43, 78.79, 114.115, 150.151, 186.187, 223.224, 260.261, 297.298,
        338.339, 372.373, 404.405,
    ],
    su_menh: [
        7.8,
        44.45,
        80.81,
        116.117,
        152.153,
        188.189,
        225.226,
        262.263,
        "299.300.301",
        "340.341.342",
        "374.375.376",
        "406.407.408",
    ],
    nam_ca_nhan: [
        35.36, 72.73, 108.109, 144.145, 180.181, 216.217, 253.254, 290.291,
        327.328, 364.365, 397.398, 426.427,
    ],
    no_nghiep: [
        "445.446.447.448",
        "428.429.430.431.432",
        "433.434.435.436.437",
        "438.439.440.441.442.443.444",
    ],
    chu_ky_vong_doi: [
        29.3, 66.67, 102.103, 138.139, 174.175, 210.211, 247.248, 284.285,
        322.323, 359.36, 392.393,
    ],
    dinh_cao: [
        31.32, 68.69, 104.105, 140.141, 176.177, 212.213, 249.25, 286.287,
        324.325, 361.362, 394.395, 423.424,
    ],
    thu_thach: [
        33.34, 70.71, 106.107, 142.143, 178.179, 214.215, 251.252, 288.289,
    ],
};

const masters = [11, 22, 33];
let noNghiep = [];
const nguyenAms = ["U", "E", "O", "A", "I"];
const soToMaus = [13, 14, 16, 19];
const NGUYEN_AM = 1;
const PHU_AM = 2;
const NONE = 0;

const transferNameToNumberSoulPlan = (name) => {
    let result = [];
    const arrName = name.toUpperCase().split("");
    for (var i = 0; i < arrName.length; i++) {
        switch (arrName[i]) {
            case "A": {
                if (i < arrName.length - 2 && arrName[i + 1] == "H") {
                    result.push(5);
                    i++;
                } else {
                    result.push(1);
                }
                break;
            }
            case "B":
                result.push(2);
                break;
            case "C": {
                if (i < arrName.length - 2 && arrName[i + 1] == "H") {
                    result.push(8);
                    i++;
                } else result.push(11);
                break;
            }
            case "D":
                result.push(4);
                break;
            case "E":
            case "H":
                result.push(5);
                break;
            case "F":
                result.push(17);
                break;
            case "P": {
                if (i == arrName.length - 1) {
                    result.push(12);
                    i++;
                } else {
                    result.push(17);
                }
                break;
            }
            case "G":
                result.push(3);
                break;
            case "I":
            case "J":
                result.push(10);
                break;
            case "K":
            case "Q":
                result.push(19);
                break;
            case "L":
                result.push(12);
                break;
            case "M": {
                if (i == arrName.length - 1) {
                    result.push(12);
                    i++;
                } else result.push(13);
                break;
            }
            case "N":
                result.push(14);
                break;
            case "O":
            case "U":
            case "V":
                result.push(6);
                break;
            case "R":
                result.push(20);
                break;
            case "S":
            case "X":
                result.push(15);
                break;
            case "T": {
                if (i < arrName.length - 1) {
                    if (arrName[i + 1] == "H") {
                        result.push(21);
                        i++;
                    } else if (arrName[i + 1] == "A") {
                        result.push(22);
                        i++;
                    } else if (arrName[i + 1] == "Z") {
                        result.push(18);
                        i++;
                    } else {
                        result.push(9);
                    }
                } else {
                    result.push(9);
                }
                break;
            }
            case "Y":
                result.push(16);
                break;
            case "Z":
                result.push(7);
                break;
            case "W": {
                if (i < arrName.length - 1 && arrName[i + 1] == "H") {
                    result.push(16);
                    i++;
                } else result.push(6);
                break;
            }
        }
    }
    return result;
};

const transferDayToNumber = (ngay, isDay) => {
    if (((ngay == 11 || ngay == 22) && isDay) || ngay < 10) return ngay;
    let result = 0;
    if (isNaN(ngay)) {
        console.error("Giá trị đầu vào không phải là số");
        return 0;
    }
    while (ngay !== 0) {
        result += ngay % 10;
        ngay = Math.floor(ngay / 10);
    }
    return +result;
};

const transferStringToNumber = (data) => {
    let result = 0;
    data.split("").forEach((char) => {
        Object.entries(table).forEach(([key, value]) => {
            if (value.includes(char.toUpperCase())) result += parseInt(key);
        });
    });
    return result;
};

const transferStringToArrayNumber = (data) => {
    let result = [];
    data.split("").forEach((char) => {
        Object.entries(table).forEach(([key, value]) => {
            if (value.includes(char.toUpperCase())) result.push(parseInt(key));
        });
    });
    return result;
};

const transferCharToNumber = (char) => {
    for (const [key, value] of Object.entries(table)) {
        if (value.includes(char.toUpperCase())) {
            return +key;
        }
    }
    return 0;
};

const transferNameToUnMarked = (name) => {
    return name
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

const SoMenhLon_congNgang = (name) => {
    let result = "";
    let processData = transferStringToNumber(name);
    result += processData;
    processData = transferDayToNumber(processData, false);
    result += "/" + processData;
    while (processData >= 10) {
        processData = transferDayToNumber(processData, false);
        result += "/" + processData;
    }
    return result;
};

const CongNgang = (name, type = NONE) => {
    let result = "";
    let temp = 0;
    name.trim()
        .split("")
        .forEach((char, index) => {
            const upperChar = char.toUpperCase();
            if (upperChar === " ") {
                result += temp + "/";
                temp = 0;
            } else if (type === NGUYEN_AM && nguyenAms.includes(upperChar)) {
                if (upperChar !== "Y" || YIsNguyenAm(name, index))
                    temp += +transferCharToNumber(char);
            } else if (
                type === PHU_AM &&
                ((upperChar === "Y" && !YIsNguyenAm(name, index)) ||
                    !nguyenAms.includes(upperChar))
            ) {
                temp += parseInt(transferCharToNumber(upperChar));
            } else if (type === NONE) {
                temp += parseInt(transferCharToNumber(upperChar));
            }
            if (index === name.length - 1) {
                result += temp;
            }
        });
    return result;
};

const CongDoc = (name, type = NONE) => {
    let result = 0;
    name.trim()
        .split(" ")
        .forEach((chars) => {
            let temp = 0;
            chars.split("").forEach((char, index) => {
                const upperChar = char.toUpperCase();
                if (type === NGUYEN_AM && nguyenAms.includes(upperChar)) {
                    if (upperChar !== "Y" || YIsNguyenAm(name, index))
                        temp += +transferCharToNumber(char);
                } else if (
                    type === PHU_AM &&
                    ((upperChar === "Y" && !YIsNguyenAm(name, index)) ||
                        !nguyenAms.includes(upperChar))
                ) {
                    temp += parseInt(transferCharToNumber(upperChar));
                } else if (type === NONE) {
                    temp += parseInt(transferCharToNumber(upperChar));
                }
                if (index === chars.length - 1) {
                    const soDon = transferDayToNumber(temp, true)
                        .toString()
                        .split("/");
                    temp = soDon[soDon.length - 1];
                    result += +temp;
                }
            });
        });
    return result.toString();
};
const isMasterNumber = (number) => {
    return +number === 11 || number === 22 || number === 33;
};

const transferHaiChuSoThanhMotChuSo = (
    number,
    hasMaster = false,
    isSoDon = false
) => {
    let result = number.toString();
    let temp = result;
    if (hasMaster) {
        while (temp >= 10 && !masters.includes(+temp)) {
            temp = transferDayToNumber(temp, true);
            result += "/" + temp;
        }
    } else {
        while (temp >= 10) {
            temp = transferDayToNumber(temp, false);
            result += "/" + temp;
        }
    }
    return isSoDon
        ? result.toString().split("/")[result.toString().split("/").length - 1]
        : result;
};

const SoMenhLon_CongDoc = (name) => {
    let result = "";
    let temp = 0;
    result = CongDoc(name, NONE);
    result.split("/").forEach((e) => {
        if (e == 11 || e == 22 || e == 33) temp += +e;
        else temp += +transferDayToNumber(e, true);
    });

    return transferHaiChuSoThanhMotChuSo(temp, false).toString();
};

const YIsNguyenAm = (name, indexY) => {
    if (indexY === name.length - 1 && indexY === 0) return true;
    if (
        (indexY >= 1 && nguyenAms.includes(name[indexY - 1].toUpperCase())) ||
        (indexY <= name.length - 2 &&
            nguyenAms.includes(name[indexY + 1].toUpperCase()))
    )
        return false;
    return true;
};

const LinhHonLon_CongNgang = (name) => {
    let result = 0;
    name.split("").forEach((element, index) => {
        let char = element.toUpperCase();
        if (nguyenAms.includes(char)) {
            if (char !== "Y" || (char === "Y" && YIsNguyenAm(name, index)))
                result += +transferCharToNumber(char);
        }
    });
    return transferHaiChuSoThanhMotChuSo(result, false);
};

const LinhHonLon_CongDoc = (name) => {
    let result = CongNgang(name, NGUYEN_AM);
    let temp = 0;
    result.split("/").forEach((e) => {
        temp += +transferDayToNumber(e, true);
    });
    return transferHaiChuSoThanhMotChuSo(temp, false);
};

const NhanCachLon_CongNgang = (name) => {
    let result = 0;
    name.split("").forEach((element, index) => {
        let char = element.toUpperCase();
        if (
            (char === "Y" && !YIsNguyenAm(name, index)) ||
            !nguyenAms.includes(char)
        ) {
            result += +transferCharToNumber(char);
        }
    });

    return transferHaiChuSoThanhMotChuSo(result);
};

const NhanCachLon_CongDoc = (name) => {
    let result = CongDoc(name, PHU_AM);
    return transferHaiChuSoThanhMotChuSo(result);
};

const ChiSoDuongDoi_CongNgang = (date) => {
    let result = 0;
    date.split("/").forEach((e, index) => {
        if (index == 2) {
            result += transferDayToNumber(e, false);
        } else result += +e;
    });

    return transferHaiChuSoThanhMotChuSo(result, false).toString();
};

const ChiSoDuongDoi_CongDoc = (date) => {
    let result = 0;
    date.split("/").forEach((e) => {
        let number = parseInt(e);
        let temp = +transferDayToNumber(number, true);
        while (temp > 10 && temp !== 11 && temp !== 22 && temp !== 33) {
            temp = +transferDayToNumber(temp, true);
        }
        result += temp;
    });
    return transferHaiChuSoThanhMotChuSo(result, false);
};

const rutGonNamSinh = (date) => {
    let result = 0;
    let temp = 0;
    date.split("").forEach((e, index) => {
        result += +e;
    });
    while (result >= 10) {
        temp = result;
        result = transferDayToNumber(result, false);
    }
    if (temp == 0) return result;
    if (temp === 11 || temp === 22 || temp === 33) return temp + "/" + result;
    return result + "/" + temp;
};

const transferNgayThangToFormatSet = (date, isRevert = true) => {
    if (+date < 10) return date;
    const temp = transferDayToNumber(date, false);
    if (date == 11 || date == 22 || date == 33) {
        return isRevert ? date + "/" + temp : temp + "/" + date;
    }
    return isRevert ? temp + "/" + date : date + "/" + temp;
};

const BaChuKyVongDoi = (date) => {
    const array = date.split("/");
    return (
        transferNgayThangToFormatSet(array[1], true) +
        "-" +
        transferNgayThangToFormatSet(array[0], true) +
        "-" +
        rutGonNamSinh(array[2], false)
    );
};

const getSoDuongDoi = (date) => {
    const duongDoiNgang = ChiSoDuongDoi_CongNgang(date).toString().split("/");
    const duongDoiDoc = ChiSoDuongDoi_CongDoc(date).toString().split("/");
    return duongDoiNgang[duongDoiNgang.length - 1] == 11 ||
        duongDoiNgang[duongDoiNgang.length - 1] == 22 ||
        duongDoiNgang[duongDoiNgang.length - 1] == 33
        ? duongDoiNgang[duongDoiNgang.length - 1]
        : duongDoiDoc[duongDoiDoc.length - 1];
};

const BonDinhGiaiDoanCuocDoi_Doc = (date) => {
    const array = date.split("/");
    rutGonNamSinh(array[2]);
    const ngaySinhRutGon = transferNgayThangToFormatSet(array[0], true);
    const thangSinhRutGon = transferNgayThangToFormatSet(array[1], true);
    const namSinhRutGon = rutGonNamSinh(array[2], true);

    const ngaySinh = +ngaySinhRutGon.split("/")[0];
    const thangSinh = +thangSinhRutGon.split("/")[0];
    let namSinh = namSinhRutGon;
    if (namSinh.toString().includes("/")) {
        namSinh = namSinh.split("/")[0];
    }

    let dinhMot = transferNgayThangToFormatSet(thangSinh + ngaySinh, true);
    let dinhHai = transferNgayThangToFormatSet(ngaySinh + namSinh, true);

    if (dinhHai.toString().includes("/")) {
        dinhHai = dinhHai.split("/")[0];
    }
    if (dinhMot.toString().includes("/")) {
        dinhMot = dinhMot.split("/")[0];
    }
    const dinhBa = transferNgayThangToFormatSet(+dinhHai + +dinhMot, true);
    const dinhBon = transferNgayThangToFormatSet(thangSinh + namSinh);
    return [dinhMot, dinhHai, dinhBa, dinhBon].join("-");
};

const BonDinhGiaiDoanCuocDoi_Ngang = (date) => {
    const array = date.split("/");

    var dinh1 = transferHaiChuSoThanhMotChuSo(+array[0] + +array[1]);
    var dinh2 = transferHaiChuSoThanhMotChuSo(
        +array[0] + +transferDayToNumber(array[2])
    );
    let temp1 = dinh1;
    let temp2 = dinh2;
    if (dinh1.toString().includes("/")) {
        temp1 = dinh1.split("/")[0];
    }
    if (dinh2.toString().includes("/")) {
        temp2 = dinh2.split("/")[0];
    }

    var dinh3 = transferHaiChuSoThanhMotChuSo(+temp1 + +temp2);
    var dinh4 = transferHaiChuSoThanhMotChuSo(
        +array[1] + +transferDayToNumber(array[2])
    );

    return [dinh1, dinh2, dinh3, dinh4].join("-");
};

const tinhTuoi = (ngaySinh) => {
    const ngaySinhDate = new Date(ngaySinh);
    const hienTai = new Date();
    let tuoi = hienTai.getFullYear() - ngaySinhDate.getFullYear();
    const m = hienTai.getMonth() - ngaySinhDate.getMonth();
    if (m < 0 || (m === 0 && hienTai.getDate() < ngaySinhDate.getDate())) {
        tuoi--;
    }
    return tuoi;
};

const BonNamDinhCao = (date) => {
    const array = date.split("/");
    const soDuongDoi = getSoDuongDoi(date);
    const soDinhCaoDauTien = 36 - soDuongDoi;
    const namDinhCaoDauTien = +array[2] + soDinhCaoDauTien;
    return [
        namDinhCaoDauTien,
        namDinhCaoDauTien + 9,
        namDinhCaoDauTien + 9 * 2,
        namDinhCaoDauTien + 9 * 3,
    ].join("-");
};

const rutGonNgayThang = (date) => {
    let temp = date;
    while (temp >= 10) {
        temp = transferDayToNumber(temp, false);
    }
    return temp;
};

const BonGiaiDoanThuThach = (date) => {
    const array = date.split("/");
    date.split("/").forEach((e, index) => {});
    const ngaySinhRutGon = transferDayToNumber(array[0], false);
    const thangSinhRutGon = transferDayToNumber(array[1], false);
    const namSinhRutGon = transferDayToNumber(
        transferDayToNumber(array[2], false),
        false
    );
    const thuThach1 = Math.abs(thangSinhRutGon - ngaySinhRutGon);
    const thuThach2 = Math.abs(ngaySinhRutGon - namSinhRutGon);
    const thuThach3 = Math.abs(thuThach1 - thuThach2);
    const thuThach4 = Math.abs(thangSinhRutGon - namSinhRutGon);

    return [thuThach1, thuThach2, thuThach3, thuThach4].join("/");
};
const TruongThanh_CongDoc = (name, date) => {
    const arr1 = SoMenhLon_CongDoc(name).split("/");
    const arr2 = ChiSoDuongDoi_CongDoc(date).toString().split("/");
    const suMenh = arr1[arr1.length - 1];
    const duongDoi = arr2[arr2.length - 1];
    return transferHaiChuSoThanhMotChuSo(+suMenh + +duongDoi, false);
};

const TruongThanh_CongNgang = (name, date) => {
    const arr1 = SoMenhLon_congNgang(name).split("/");
    const arr2 = ChiSoDuongDoi_CongNgang(date).split("/");
    const suMenh = arr1[0];
    const duongDoi = arr2[0];
    return transferHaiChuSoThanhMotChuSo(+suMenh + +duongDoi, false);
};

const ThaiDo_CongNgang = (date) => {
    const ngaySinh = date.split("/")[0];
    const thangSinh = date.split("/")[1];
    let result = 0;
    result += +ngaySinh + +thangSinh;
    return transferHaiChuSoThanhMotChuSo(result, false);
};

const ThaiDo_CongDoc = (date) => {
    const ngaySinh = transferDayToNumber(date.split("/")[0], true);
    const thangSinh = transferDayToNumber(date.split("/")[1], true);
    let result = 0;
    result += +ngaySinh + +thangSinh;

    return transferHaiChuSoThanhMotChuSo(result, false);
};

const KetNoiGiuaDuongDoiVaSoMenh_Ngang = (name, date) => {
    const duongDoi = ChiSoDuongDoi_CongNgang(date).split("/")[0];
    const soMenh = SoMenhLon_congNgang(name).split("/")[0];
    return transferHaiChuSoThanhMotChuSo(Math.abs(duongDoi - soMenh));
};

const KetNoiGiuaDuongDoiVaSoMenh_Doc = (name, date) => {
    const array1 = ChiSoDuongDoi_CongDoc(date).toString().split("/");
    let hasMaster = false;
    const array2 = SoMenhLon_congNgang(name).split("/");
    let duongDoi = array1[array1.length - 1];
    let soMenh = array2[array2.length - 1];
    let result1 = Math.abs(duongDoi - soMenh);
    for (var i = 0; i < array1.length; i++) {
        if ([11, 22, 33].includes(array1[i])) {
            duongDoi = array1[i];
            hasMaster = true;
        }
        if ([11, 22, 33].includes(array2[i])) {
            soMenh = array2[i];
            hasMaster = true;
        }
    }

    return hasMaster
        ? result1 + " hay " + Math.abs(duongDoi - soMenh)
        : result1 + "";
};

const ChiSoThieu = (name) => {
    const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    name.split("").forEach((char) => {
        ints.forEach((e) => {
            if (e === transferCharToNumber(char)) {
                ints.splice(ints.indexOf(e), 1);
            }
        });
    });

    return ints;
};

//!NOTE chua xong
const NoNghiep = (data) => {
    const noNghiepNumbers = [1, 4, 5, 7];
    let result = [];
    for (let i of data) {
        if (noNghiepNumbers.includes(+i) && !result.includes(+i)) {
            result.push(+i);
        }
    }
    return result.sort((a, b) => a - b);
};

const NamCaNhan_CongNgang = (date) => {
    const array = date.split("/");
    let total =
        +transferDayToNumber(new Date().getFullYear(), true) +
        +array[0] +
        +array[1];
    return transferHaiChuSoThanhMotChuSo(total, false, false);
};

const NamCaNhan_CongDoc = (date) => {
    let result = 0;
    let ngay = +transferDayToNumber(date.split("/")[0], true);
    let thang = +transferDayToNumber(date.split("/")[1], true);
    let nam = +transferDayToNumber(new Date().getFullYear(), true);
    result = ngay + thang + nam;
    let temp = result;
    while (temp >= 10) {
        temp = transferDayToNumber(temp, false);
        result = temp;
    }
    return result;
};

const TuDuyHopLy_Doc = (name, date) => {
    const soMenhNho_CongDoc = SoMenhLon_CongDoc(name).split("/");
    const soDon_CongDoc = soMenhNho_CongDoc[soMenhNho_CongDoc.length - 1];
    const ngay = transferDayToNumber(date.split("/")[0], true);
    return transferHaiChuSoThanhMotChuSo(+ngay + +soDon_CongDoc);
};

const TuDuyHopLy_Ngang = (name, date) => {
    const soMenhNho_CongNgang = +SoMenhLon_congNgang(name).split("/")[0];
    const ngay = transferDayToNumber(date.split("/")[0], true);
    return transferHaiChuSoThanhMotChuSo(+ngay + +soMenhNho_CongNgang);
};

const DiemBaoMat = (name) => {
    name = name.trim().replace(/ /g, "");
    return name.length === 11 ||
        name.length === 22 ||
        name.length === 33 ||
        name.length === 13 ||
        name.length === 14 ||
        name.length === 16 ||
        name.length === 19
        ? name.length
        : transferHaiChuSoThanhMotChuSo(name.length);
};

const PhanHoiTiemThuc = (name) => {
    return 9 - ChiSoThieu(name).length;
};

const CanBang_CongDoc = (name) => {
    let isFirst = true;
    let result = {
        bieuThuc: "",
        ketQua: 0,
    };
    name.split(" ").forEach((char) => {
        let value = transferDayToNumber(
            char[0].toUpperCase().charCodeAt(0) - 64,
            true
        );
        result.ketQua += value;
        isFirst
            ? (result.bieuThuc += value)
            : (result.bieuThuc += " + " + value);
        isFirst = false;
    });
    result.ketQua = transferHaiChuSoThanhMotChuSo(result.ketQua, false, false);
    return result;
};

const CanBang_CongNgang = (name) => {
    let result = {
        bieuThuc: "",
        ketQua: 0,
    };
    let isFirst = true;
    name.split(" ").forEach((char) => {
        result.ketQua += char[0].toUpperCase().charCodeAt(0) - 64;
        isFirst
            ? (result.bieuThuc += char[0].toUpperCase().charCodeAt(0) - 64)
            : (result.bieuThuc +=
                  " + " + (char[0].toUpperCase().charCodeAt(0) - 64));
        isFirst = false;
    });
    result.ketQua = transferHaiChuSoThanhMotChuSo(result.ketQua);
    return result;
};

const showData = () => {
    $("#bangthanso").removeClass("hidden");
    $("#showform").removeClass("hidden");
};


const getCurrentDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
};

const getChiSo = (doc = "", ngang = "", isKetNoi = false) => {
    doc += "";
    ngang += "";
    let result = 0;
    if (!doc) return ngang;
    if (!ngang) return doc;
    // if (doc != "" && !doc.includes("/")) return doc;
    // if (ngang != "" && !ngang.includes("/")) return ngang;
    doc.split("/").forEach((e) => {
        if (masters.includes(+e)) result = +e;
    });
    ngang.split("/").forEach((e) => {
        if (masters.includes(+e)) result = +e;
    });
    if (!masters.includes(+result))
        result = !isKetNoi
            ? ngang.split("/")[ngang.split("/").length - 1]
            : doc.split("/")[doc.split("/").length - 1];
    return result;
};

const hasRedColor = (data) => {
    const arr = data.toString().split("/");
    for (const t of arr) {
        if (soToMaus.includes(+t)) {
            let soDon = transferHaiChuSoThanhMotChuSo(+t, false, true);
            if (!noNghiep.includes(soDon.toString())) {
                noNghiep.push(soDon);
            }
            return true;
        }
    }
    return false;
};

const hasYellowColor = (diemBaoMat, data) => {
    const arr = data.toString().split("/");
    for (const t of arr) {
        if (diemBaoMat == t) {
            return true;
        }
    }
    return false;
};

const getMaxNumberInDate = (date) => {
    let result = transferDayToNumber(date).toString();
    let max = 0;
    if (result < 10) {
        return date;
    }
    result.split("/").forEach((e) => {
        if (e > max) max = e;
    });
    return max;
};

const BieuDoNgaySinh = (
    content,
    data = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
    }
) => {
    let result = data;
    let arrDate = content.split("");
    for (let i = 1; i <= 9; i++) {
        arrDate = arrDate.filter((e) => {
            if (e == "/") return false;
            if (e == i) {
                if (result[i]) {
                    result[i].push(e);
                } else {
                    result[i] = [e];
                }
                return false;
            }
            return true;
        });
    }

    return result;
};

const BieuDoNgaySinh_Ten = (date, name) => {
    let result = date + transferStringToArrayNumber(name).join("");
    return BieuDoNgaySinh(result);
};

const updateBieuDoNgaySinh_ThuongGoi = (bieuDoNgaySinh) => {
    for (let i = 1; i <= 9; i++) {
        $(`#bieuDoNgaySinh_ThuongGoi_cell_${i}`).html(
            bieuDoNgaySinh[i] ? bieuDoNgaySinh[i].join("") : ""
        );
    }
};

const updateBieuDoNgaySinh_DayDu = (bieuDoNgaySinh) => {
    for (let i = 1; i <= 9; i++) {
        $(`#bieuDoNgaySinh_DayDu_cell_${i}`).html(
            bieuDoNgaySinh[i] ? bieuDoNgaySinh[i].join("") : ""
        );
    }
};

const updateBieuDoNgaySinh = (bieuDoNgaySinh) => {
    for (let i = 1; i <= 9; i++) {
        $(`#bieuDoNgaySinh_cell_${i}`).html(
            bieuDoNgaySinh[i] ? bieuDoNgaySinh[i].join("") : ""
        );
    }
};

const MaTranTamLy = (date) => {
    date = date.trim(); // duLieu1
    const ngay = date.split("/")[0];
    let tongNgayThangNam = 0;
    for (var char of date) {
        if (char != "/") {
            tongNgayThangNam += +char;
        }
    }

    let duLieu2 =
        tongNgayThangNam + "/" + transferDayToNumber(tongNgayThangNam, false);

    const soDauTienCuaNgay = +ngay[0];
    let duLieu3 = +tongNgayThangNam - soDauTienCuaNgay * 2;
    duLieu3 += "/" + transferDayToNumber(duLieu3, false);

    duLieu2 += date + duLieu3;
    return BieuDoNgaySinh(duLieu2);
};

const updateMaTranTamLyAndTamLyTinhNam_Nu = (maTranTamLy) => {
    const hoa =
        maTranTamLy[3].length +
        maTranTamLy[5].length +
        maTranTamLy[6].length +
        maTranTamLy[7].length +
        maTranTamLy[8].length +
        maTranTamLy[9].length;
    const tho =
        maTranTamLy[4].length + maTranTamLy[5].length + maTranTamLy[6].length;
    const kim =
        maTranTamLy[1].length +
        maTranTamLy[2].length +
        maTranTamLy[3].length +
        maTranTamLy[5].length +
        maTranTamLy[6].length +
        maTranTamLy[9].length;
    const moc =
        maTranTamLy[1].length +
        maTranTamLy[2].length +
        maTranTamLy[3].length +
        maTranTamLy[7].length +
        maTranTamLy[8].length +
        maTranTamLy[9].length;
    const thuy =
        maTranTamLy[1].length +
        maTranTamLy[2].length +
        maTranTamLy[3].length +
        maTranTamLy[4].length +
        maTranTamLy[5].length +
        maTranTamLy[7].length;

    const nguHanh1 = {
        color: "text-red-500", // "text-red-500"
        showName: "Hỏa",
        value: hoa,
    };

    const nguHanh2 = {
        color: "text-blue-500",
        showName: "Thủy",
        value: thuy,
    };
    const nguHanh3 = {
        color: "text-green-500",
        showName: "Mộc",
        value: moc,
    };
    const nguHanh4 = {
        color: "text-yellow-500",
        showName: "Kim",
        value: kim,
    };

    const nguHanh5 = {
        color: "text-gray-500",
        showName: "Thổ",
        value: tho,
    };
    const chiSoDong1 =
        maTranTamLy[3].length + maTranTamLy[6].length + maTranTamLy[9].length;
    const chiSoDong2 =
        maTranTamLy[2].length + maTranTamLy[5].length + maTranTamLy[8].length;
    const chiSoDong3 =
        maTranTamLy[1].length + maTranTamLy[4].length + maTranTamLy[7].length;
    const chiSoDong = [chiSoDong1, chiSoDong2, chiSoDong3];

    const chiSoCot1 =
        maTranTamLy[1].length + maTranTamLy[2].length + maTranTamLy[3].length;
    const chiSoCot2 =
        maTranTamLy[4].length + maTranTamLy[5].length + maTranTamLy[6].length;
    const chiSoCot3 =
        maTranTamLy[7].length + maTranTamLy[8].length + maTranTamLy[9].length;
    const chiSoCot = [chiSoCot1, chiSoCot2, chiSoCot3];

    for (var i = 0; i < 3; i++) {
        $(`#chiSoDong${i + 1}`).html(chiSoDong[i]);
        $(`#chiSoCot${i + 1}`).html(chiSoCot[i]);
    }

    let list = [nguHanh1, nguHanh2, nguHanh3, nguHanh4, nguHanh5];
    list.sort((a, b) => b.value - a.value);

    for (var i = 0; i < list.length; i++) {
        $(`#nguHanh${i + 1}`).html(
            `<span class=${list[i].color}>${list[i].value} <br class='uppercase'> ${list[i].showName} </span>`
        );
    }

    for (let i = 1; i <= 9; i++) {
        $(`#maTranTamLy_cell_${i}`).html(
            maTranTamLy[i] ? maTranTamLy[i].join("") : ""
        );
    }

    // ma tran tam ly tinh nam - nu
    const tinhNam =
        maTranTamLy[1].length +
        maTranTamLy[3].length +
        maTranTamLy[5].length +
        maTranTamLy[7].length +
        maTranTamLy[9].length;
    const tinhNu =
        maTranTamLy[2].length +
        maTranTamLy[4].length +
        maTranTamLy[6].length +
        maTranTamLy[8].length;
    $("#tamLyTinhNam").html(tinhNam);
    $("#tamLyTinhNu").html(tinhNu);
};

const soulPlan_Process_UpdateUI = (name) => {
    var isShortName = name.length <= 11;
    if (isShortName) {
        $("#tamGiac2").addClass("hidden");
    }
    const listNumbers = transferNameToNumberSoulPlan(name);
    let vatChatThuThach = 0;
    let tinhThanThuThach = 0;
    let vatChatTaiNang = 0;
    let tinhThanTaiNang = 0;
    let vatChatMucTieu = 0;
    let tinhThanMucTieu = 0;

    let vatChatThuThach1 = 0;
    let tinhThanThuThach1 = 0;
    let vatChatTaiNang1 = 0;
    let tinhThanTaiNang1 = 0;
    let vatChatMucTieu1 = 0;
    let tinhThanMucTieu1 = 0;

    let vatChatThuThach2 = 0;
    let tinhThanThuThach2 = 0;
    let vatChatTaiNang2 = 0;
    let tinhThanTaiNang2 = 0;
    let vatChatMucTieu2 = 0;
    let tinhThanMucTieu2 = 0;
    let index = 0;
    if (isShortName) {
        for (var i of listNumbers) {
            if (index == 0) {
                tinhThanThuThach += i;
            }
            if (index == 1) {
                tinhThanTaiNang += i;
            }
            if (index == 2) {
                tinhThanMucTieu += i;
            }
            index++;
            index = index % 3;
        }
    } else {
        for (var i of listNumbers) {
            if (index == 0) {
                vatChatThuThach += i;
            }
            if (index == 1) {
                tinhThanThuThach += i;
            }
            if (index == 2) {
                vatChatTaiNang += i;
            }
            if (index == 3) {
                tinhThanTaiNang += i;
            }
            if (index == 4) {
                vatChatMucTieu += i;
            }
            if (index == 5) {
                tinhThanMucTieu += i;
            }
            index++;
            index = index % 6;
        }
    }

    tinhThanTaiNang > 22
        ? (tinhThanTaiNang1 = transferDayToNumber(tinhThanTaiNang))
        : (tinhThanTaiNang1 = tinhThanTaiNang);
    tinhThanMucTieu > 22
        ? (tinhThanMucTieu1 = transferDayToNumber(tinhThanMucTieu))
        : (tinhThanMucTieu1 = tinhThanMucTieu);
    tinhThanThuThach > 22
        ? (tinhThanThuThach1 = transferDayToNumber(tinhThanThuThach))
        : (tinhThanThuThach1 = tinhThanThuThach);

    if (!isShortName) {
        vatChatThuThach > 22
            ? (vatChatThuThach1 = transferDayToNumber(vatChatThuThach))
            : (vatChatThuThach1 = vatChatThuThach);
        vatChatTaiNang > 22
            ? (vatChatTaiNang1 = transferDayToNumber(vatChatTaiNang))
            : (vatChatTaiNang1 = vatChatTaiNang);
        vatChatMucTieu > 22
            ? (vatChatMucTieu1 = transferDayToNumber(vatChatMucTieu))
            : (vatChatMucTieu1 = vatChatMucTieu);
    }

    tinhThanThuThach > 10
        ? (tinhThanThuThach2 = transferHaiChuSoThanhMotChuSo(
              tinhThanThuThach1,
              false,
              true
          ))
        : (tinhThanThuThach2 = tinhThanThuThach1);
    tinhThanTaiNang > 10
        ? (tinhThanTaiNang2 = transferHaiChuSoThanhMotChuSo(
              tinhThanTaiNang1,
              false,
              true
          ))
        : (tinhThanTaiNang2 = tinhThanTaiNang1);
    tinhThanMucTieu > 10
        ? (tinhThanMucTieu2 = transferHaiChuSoThanhMotChuSo(
              tinhThanMucTieu1,
              false,
              true
          ))
        : (tinhThanMucTieu2 = tinhThanMucTieu1);
    if (!isShortName) {
        vatChatThuThach > 10
            ? (vatChatThuThach2 = transferHaiChuSoThanhMotChuSo(
                  vatChatThuThach1,
                  false,
                  true
              ))
            : (vatChatThuThach2 = vatChatThuThach1);
        vatChatTaiNang > 10
            ? (vatChatTaiNang2 = transferHaiChuSoThanhMotChuSo(
                  vatChatTaiNang1,
                  false,
                  true
              ))
            : (vatChatTaiNang2 = vatChatTaiNang1);
        vatChatMucTieu > 10
            ? (vatChatMucTieu2 = transferHaiChuSoThanhMotChuSo(
                  vatChatMucTieu1,
                  false,
                  true
              ))
            : (vatChatMucTieu2 = vatChatMucTieu1);
    }

    let vanMenhLinhHon1, vanMenhLinhHon2;

    if (isShortName) {
        vanMenhLinhHon1 = transferDayToNumber(
            tinhThanMucTieu1 + tinhThanThuThach1 + tinhThanTaiNang1
        );
        vanMenhLinhHon2 = transferHaiChuSoThanhMotChuSo(
            tinhThanMucTieu2 + tinhThanThuThach2 + tinhThanTaiNang2,
            false,
            true
        );
    } else {
        vanMenhLinhHon1 = transferDayToNumber(
            vatChatThuThach1 +
                tinhThanThuThach1 +
                vatChatTaiNang1 +
                tinhThanTaiNang1 +
                vatChatMucTieu1 +
                tinhThanMucTieu1
        );
        vanMenhLinhHon2 = transferHaiChuSoThanhMotChuSo(
            vatChatThuThach2 +
                tinhThanThuThach2 +
                vatChatTaiNang2 +
                tinhThanTaiNang2 +
                vatChatMucTieu2 +
                tinhThanMucTieu2,
            false,
            true
        );
    }

    //update UI
    $("#vanMenhLinhHon").html(vanMenhLinhHon1 + " - " + vanMenhLinhHon2);
    $("#tinhThanMucTieu").html(tinhThanMucTieu1 + " - " + tinhThanMucTieu2);
    $("#tinhThanTaiNang").html(tinhThanTaiNang1 + " - " + tinhThanTaiNang2);
    $("#tinhThanThuThach").html(tinhThanThuThach1 + " - " + tinhThanThuThach2);
    if (!isShortName) {
        $("#tamGiac2").removeClass("hidden");
        $("#vatChatThuThach").removeClass("hidden");
        $("#vatChatMucTieu").removeClass("hidden");
        $("#vatChatTaiNang").removeClass("hidden");
        $("#soulPlan_MucTieu2").removeClass("hidden");
        $("#soulPlan_ThuThach2").removeClass("hidden");
        $("#soulPlan_TaiNang2").removeClass("hidden");
        $("#vatChatThuThach").html(vatChatThuThach1 + " - " + vatChatThuThach2);
        $("#vatChatMucTieu").html(vatChatMucTieu1 + " - " + vatChatMucTieu2);
        $("#vatChatTaiNang").html(vatChatTaiNang1 + " - " + vatChatTaiNang2);
    } else {
        $("#soulPlan_MucTieu1").html("Tinh Thần/Vật Chất<br />Mục Tiêu");
        $("#soulPlan_ThuThach1").html("Tinh Thần/Vật Chất<br />Thử Thách");
        $("#soulPlan_TaiNang1").html("Tinh Thần/Vật Chất<br />Tài Năng");
        $("#soulPlan_MucTieu2").addClass("hidden");
        $("#soulPlan_ThuThach2").addClass("hidden");
        $("#soulPlan_TaiNang2").addClass("hidden");
        $("#vatChatThuThach").addClass("hidden");
        $("#vatChatMucTieu").addClass("hidden");
        $("#vatChatTaiNang").addClass("hidden");
    }
};

const transferDataToIndexPassTSH = (name, data) => {
    if (name == "no_nghiep") {
        if (data == 7) return data - 4;
        else if (data >= 4) return data - 3;
    }
    if (data == 11) {
        return 9;
    } else if (data == 22) {
        return 10;
    } else if (data == 33) {
        return 11;
    }
    return data - 1;
};

const getMappingDataFromPassTSH = (name, value) => {
    let index;
    if (value == 0) return "";
    if (name == "su_menh_lon" || name == "su_menh_nho") name = "su_menh";
    if (name == "linh_hon_lon" || name == "linh_hon_nho") name = "linh_hon";
    if (name == "nhan_cach_lon" || name == "nhan_cach_nho") name = "nhan_cach";
    if (
        name == "thieu" ||
        name == "no_nghiep" ||
        name == "chu_ky_vong_doi" ||
        name == "dinh_cao" ||
        name == "thu_thach"
    ) {
        let result = [];
        for (let v of value) {
            if (v == 0) break;
            if (v.toString().includes("/") && name == "chu_ky_vong_doi") {
                v = v.split("/")[0];
            }
            index = transferDataToIndexPassTSH(name, v);
            result.push(dataMappingPassTSH[name][index]);
        }
        return result.join(", ");
    }
    index = transferDataToIndexPassTSH(name, value);
    return dataMappingPassTSH[name][index];
};

function Pass_TSH(data) {
    const result = [
        getMappingDataFromPassTSH("duong_doi", data.duong_doi),
        getMappingDataFromPassTSH("su_menh_lon", data.su_menh_lon),
        getMappingDataFromPassTSH("ket_noi", data.ket_noi),
        getMappingDataFromPassTSH("truong_thanh", data.truong_thanh),
        getMappingDataFromPassTSH("linh_hon_nho", data.linh_hon_nho),
        getMappingDataFromPassTSH("nhan_cach_nho", data.nhan_cach_nho),
        getMappingDataFromPassTSH("su_menh_nho", data.su_menh_nho),
        getMappingDataFromPassTSH("nang_luc", data.nang_luc),
        getMappingDataFromPassTSH("tu_duy_hop_ly", data.tu_duy_hop_ly),
        getMappingDataFromPassTSH("thieu", data.thieu),
        getMappingDataFromPassTSH(
            "phan_hoi_tiem_thuc",
            data.phan_hoi_tiem_thuc
        ),
        getMappingDataFromPassTSH("diem_bao_mat", data.diem_bao_mat),
        getMappingDataFromPassTSH("linh_hon_lon", data.linh_hon_lon),
        getMappingDataFromPassTSH("nhan_cach_lon", data.nhan_cach_lon),
        getMappingDataFromPassTSH("su_menh_lon", data.su_menh_lon),
        getMappingDataFromPassTSH("nam_ca_nhan", data.nam_ca_nhan),
        getMappingDataFromPassTSH("no_nghiep", data.no_nghiep),
        getMappingDataFromPassTSH("chu_ky_vong_doi", data.chu_ky_vong_doi),
        getMappingDataFromPassTSH("dinh_cao", data.dinh_cao),
        getMappingDataFromPassTSH("thu_thach", data.thu_thach),
    ];
    return result.join(", ").replace(/\./g, ", ");
}

$(document).ready(function () {
    $("#hodem, #ten, #tentacy, #ngay, #thang, #nam").on("change", validateForm);
    $("#thanso").submit(function (e) {
        e.preventDefault();
        validateForm();
        showData();

        //! ---------- Xử lý input -----------
        var hoVaTen = $("#hoTen").val();
        var tenThuongGoi = $("#inputTenThuongGoi").val();

        // update ui name
        $("#hoVaTen").html(hoVaTen);
        $("#tenThuongGoi1").html(tenThuongGoi);
        $("#hoVaTen2").html(hoVaTen);

        hoVaTen = transferNameToUnMarked(hoVaTen);
        tenThuongGoi = transferNameToUnMarked(tenThuongGoi);
        var inputNgay = $("#ngay").val();
        var inputThang = $("#thang").val();
        var inputNam = $("#nam").val();

        var sinhNhat = inputNgay + "/" + inputThang + "/" + inputNam;
        //! ---------- END Xử lý input -----------

        //! ---------- Xử lý dữ liệu -----------

        var duongDoi_Doc = ChiSoDuongDoi_CongDoc(sinhNhat);
        var duongDoi_Ngang = ChiSoDuongDoi_CongNgang(sinhNhat);
        var duongDoi_ChiSo = getChiSo(duongDoi_Doc, duongDoi_Ngang, false);

        var suMenhLon_Doc = SoMenhLon_CongDoc(hoVaTen);
        var suMenhLon_Ngang = SoMenhLon_congNgang(hoVaTen);
        var suMenhLon_ChiSo = getChiSo(suMenhLon_Doc, suMenhLon_Ngang, false);

        var ketNoi_Doc = KetNoiGiuaDuongDoiVaSoMenh_Doc(hoVaTen, sinhNhat);
        var ketNoi_Ngang = KetNoiGiuaDuongDoiVaSoMenh_Ngang(hoVaTen, sinhNhat);
        var ketNoi_ChiSo = getChiSo(ketNoi_Doc, ketNoi_Ngang, true);

        var truongThanh_Doc = TruongThanh_CongDoc(hoVaTen, sinhNhat);
        var truongThanh_Ngang = TruongThanh_CongNgang(hoVaTen, sinhNhat);
        var truongThanh_ChiSo = getChiSo(
            truongThanh_Doc,
            truongThanh_Ngang,
            false
        );

        var linhHonNho_Doc = LinhHonLon_CongDoc(tenThuongGoi || ten);
        var linhHonNho_Ngang = LinhHonLon_CongNgang(tenThuongGoi || ten);
        var linhHonNho_ChiSo = getChiSo(
            linhHonNho_Doc,
            linhHonNho_Ngang,
            false
        );

        var nhanCachNho_Doc = NhanCachLon_CongDoc(tenThuongGoi || ten);
        var nhanCachNho_Ngang = NhanCachLon_CongNgang(tenThuongGoi || ten);
        var nhanCachNho_ChiSo = getChiSo(
            nhanCachNho_Doc,
            nhanCachNho_Ngang,
            false
        );

        var nhanCachLon_Doc = NhanCachLon_CongDoc(hoVaTen);
        var nhanCachLon_Ngang = NhanCachLon_CongNgang(hoVaTen);
        var nhanCachLon_ChiSo = getChiSo(
            nhanCachLon_Doc,
            nhanCachLon_Ngang,
            false
        );

        var soMenhNho_Doc = SoMenhLon_CongDoc(tenThuongGoi || ten);
        var soMenhNho_Ngang = SoMenhLon_congNgang(tenThuongGoi || ten);
        var soMenhNho_ChiSo = getChiSo(soMenhNho_Doc, soMenhNho_Ngang, false);

        var ngaySinh_Doc = inputNgay;
        var ngaySinh_Ngang = transferHaiChuSoThanhMotChuSo(inputNgay, true);
        var ngaySinh_ChiSo = getChiSo(ngaySinh_Doc, ngaySinh_Ngang, false);

        var tuDuyHopLy_Doc = TuDuyHopLy_Doc(tenThuongGoi || ten, sinhNhat);
        var tuDuyHopLy_Ngang = TuDuyHopLy_Ngang(tenThuongGoi || ten, sinhNhat);
        var tuDuyHopLy_ChiSo = getChiSo(
            tuDuyHopLy_Doc,
            tuDuyHopLy_Ngang,
            false
        );

        var thieu = ChiSoThieu(hoVaTen).join(" - ");

        var phanHoiTiemThuc_Doc = PhanHoiTiemThuc(hoVaTen);

        var linhHonLon_Doc = LinhHonLon_CongDoc(hoVaTen);
        var linhHonLon_Ngang = LinhHonLon_CongNgang(hoVaTen);
        var linhHonLon_ChiSo = getChiSo(
            linhHonLon_Doc,
            linhHonLon_Ngang,
            false
        );

        var diemBaoMat = DiemBaoMat(hoVaTen);
        var diemBaoMat_ChiSo = getChiSo(diemBaoMat, diemBaoMat, false);

        var soMenhLon_Doc = SoMenhLon_CongDoc(hoVaTen);
        var soMenhLon_Ngang = SoMenhLon_congNgang(hoVaTen);
        var soMenhLon_ChiSo = getChiSo(soMenhLon_Doc, soMenhLon_Ngang, false);

        var namCaNhan_Doc = NamCaNhan_CongDoc(sinhNhat);
        var namCaNhan_Ngang = NamCaNhan_CongNgang(sinhNhat);

        var thangCaNhan_Ngang = transferHaiChuSoThanhMotChuSo(
            new Date().getMonth() +
                1 +
                +transferHaiChuSoThanhMotChuSo(namCaNhan_Ngang, true, true),
            true,
            true
        );
        var thangCaNhan_Doc = transferHaiChuSoThanhMotChuSo(
            new Date().getMonth() +
                1 +
                +transferHaiChuSoThanhMotChuSo(namCaNhan_Doc, true, true),
            true,
            true
        );

        var ngayCaNhan_Doc = transferHaiChuSoThanhMotChuSo(
            new Date().getDate() + +thangCaNhan_Doc,
            true,
            true
        );
        var ngayCaNhan_Ngang = transferHaiChuSoThanhMotChuSo(
            new Date().getDate() + +thangCaNhan_Ngang,
            true,
            true
        );

        var thaiDo_Doc = ThaiDo_CongDoc(sinhNhat);
        var thaiDo_Ngang = ThaiDo_CongNgang(sinhNhat);
        var thaiDo_ChiSo = getChiSo(thaiDo_Doc, thaiDo_Ngang, false);

        var canBang_Doc = CanBang_CongDoc(hoVaTen);
        var canBang_Ngang = CanBang_CongNgang(hoVaTen);
        var canBang_ChiSo = getChiSo(
            canBang_Doc.ketQua,
            canBang_Ngang.ketQua,
            false
        );

        var arrDate = sinhNhat.split("/");
        var bonThuThach = BonGiaiDoanThuThach(sinhNhat).split("/");
        var thuThach1_Doc = bonThuThach[0];
        var thuThach1_Ngang = transferHaiChuSoThanhMotChuSo(
            Math.abs(arrDate[0] - arrDate[1])
        );
        var thuThach1 = thuThach1_Doc + " - " + thuThach1_Ngang;
        var thuThach2_Doc = bonThuThach[1];
        var thuThach2_Ngang = transferHaiChuSoThanhMotChuSo(
            transferDayToNumber(Math.abs(arrDate[0] - arrDate[2]))
        );
        var thuThach2 = thuThach2_Doc + " - " + thuThach2_Ngang;
        var thuThach3_Doc = bonThuThach[2];
        var thuThach3_Ngang = transferDayToNumber(
            Math.abs(thuThach2_Doc - thuThach1_Doc)
        );
        var thuThach3 = thuThach3_Doc + " - " + thuThach3_Ngang;
        var thuThach4_Doc = bonThuThach[3];
        var thuThach4_Ngang = transferHaiChuSoThanhMotChuSo(
            transferDayToNumber(Math.abs(arrDate[0] - arrDate[2]))
        );
        var thuThach4 = thuThach4_Doc + " - " + thuThach4_Ngang;

        var bonNamDinhCao = BonNamDinhCao(sinhNhat).split("-");

        var namDinhCao1 = bonNamDinhCao[0];
        var tuoiDinhCao1 = namDinhCao1 - inputNam;
        var namVaTuoiDinhCao1 =
            tuoiDinhCao1 + " Tuổi - (Năm " + namDinhCao1 + ")";

        var namDinhCao2 = bonNamDinhCao[1];
        var tuoiDinhCao2 = namDinhCao2 - inputNam;
        var namVaTuoiDinhCao2 =
            tuoiDinhCao2 + " Tuổi - (Năm " + namDinhCao2 + ")";

        var namDinhCao3 = bonNamDinhCao[2];
        var tuoiDinhCao3 = namDinhCao3 - inputNam;
        var namVaTuoiDinhCao3 =
            tuoiDinhCao3 + " Tuổi - (Năm " + namDinhCao3 + ")";

        var namDinhCao4 = bonNamDinhCao[3];
        var tuoiDinhCao4 = namDinhCao4 - inputNam;
        var namVaTuoiDinhCao4 =
            tuoiDinhCao4 + " Tuổi - (Năm " + namDinhCao4 + ")";

        var bonDinhGiaiDoanCuocDoi_Doc =
            BonDinhGiaiDoanCuocDoi_Doc(sinhNhat).split("-");
        var bonDinhGiaiDoanCuocDoi_Ngang =
            BonDinhGiaiDoanCuocDoi_Ngang(sinhNhat).split("-");
        var dinh1_Doc = bonDinhGiaiDoanCuocDoi_Doc[0];
        var dinh2_Doc = bonDinhGiaiDoanCuocDoi_Doc[1];
        var dinh3_Doc = bonDinhGiaiDoanCuocDoi_Doc[2];
        var dinh4_Doc = bonDinhGiaiDoanCuocDoi_Doc[3];

        var dinh1_Ngang = bonDinhGiaiDoanCuocDoi_Ngang[0];
        var dinh2_Ngang = bonDinhGiaiDoanCuocDoi_Ngang[1];
        var dinh3_Ngang = bonDinhGiaiDoanCuocDoi_Ngang[2];
        var dinh4_Ngang = bonDinhGiaiDoanCuocDoi_Ngang[3];

        var namDinhCaoSo4_Thu1 = namDinhCao1 - 5;
        var tuoiDinhCaoSo4_Thu1 = namDinhCaoSo4_Thu1 - inputNam;
        var dinhCaoSo4_Thu1 =
            tuoiDinhCaoSo4_Thu1 + " Tuổi (Năm " + namDinhCaoSo4_Thu1 + ")";

        var namDinhCaoSo4_Thu2 = namDinhCaoSo4_Thu1 + 9;
        var tuoiDinhCaoSo4_Thu2 = namDinhCaoSo4_Thu2 - inputNam;
        var dinhCaoSo4_Thu2 =
            tuoiDinhCaoSo4_Thu2 + " Tuổi (Năm " + namDinhCaoSo4_Thu2 + ")";

        var namDinhCaoSo4_Thu3 = namDinhCaoSo4_Thu2 + 18;
        var tuoiDinhCaoSo4_Thu3 = namDinhCaoSo4_Thu3 - inputNam;
        var dinhCaoSo4_Thu3 =
            tuoiDinhCaoSo4_Thu3 + " Tuổi (Năm " + namDinhCaoSo4_Thu3 + ")";

        var namDinhCaoSo4_Thu4 = namDinhCaoSo4_Thu3 + 27;
        var tuoiDinhCaoSo4_Thu4 = namDinhCaoSo4_Thu4 - inputNam;
        var dinhCaoSo4_Thu4 =
            tuoiDinhCaoSo4_Thu4 + " Tuổi (Năm " + namDinhCaoSo4_Thu4 + ")";

        var bieuDoNgaySinh = BieuDoNgaySinh(sinhNhat);

        var maTranTamLy = MaTranTamLy(sinhNhat);
        updateMaTranTamLyAndTamLyTinhNam_Nu(maTranTamLy);

        soulPlan_Process_UpdateUI(hoVaTen);

        var bieuDoNgaySinh_ThuongGoi = BieuDoNgaySinh_Ten(
            sinhNhat,
            tenThuongGoi || ten
        );
        updateBieuDoNgaySinh_ThuongGoi(bieuDoNgaySinh_ThuongGoi);

        var bieuDoNgaySinh_DayDu = BieuDoNgaySinh_Ten(sinhNhat, hoVaTen);
        updateBieuDoNgaySinh_DayDu(bieuDoNgaySinh_DayDu);
        const baChuKyVongDoi = BaChuKyVongDoi(sinhNhat);

        const chuKyVongDoi_1 = baChuKyVongDoi.split("-")[0];
        const chuKyVongDoi_2 = baChuKyVongDoi.split("-")[1];
        const chuKyVongDoi_3 = baChuKyVongDoi.split("-")[2];

        //! ----------END Xử lý dữ liệu -----------

        //! ---------- Hiển thị dữ liệu -----------

        $("#ngaySinh").html(sinhNhat);
        if (hasRedColor(sinhNhat))
            $("#ngaySinh").addClass("text-white bg-red-500");
        else {
            $("#ngaySinh").removeClass("text-white bg-red-500");
        }

        $("#ngaySinh1").html(sinhNhat);

        $("#ngayHienTai").html(getCurrentDate());
        $("#tenThuongGoi").html(tenThuongGoi);

        $("#duongDoi_Doc").html(duongDoi_Doc);
        $("#duongDoi_Ngang").html(duongDoi_Ngang);
        $("#duongDoi_ChiSo").html(duongDoi_ChiSo);
        if (hasRedColor(duongDoi_Doc))
            $("#duongDoi_Doc").addClass("text-white bg-red-500");
        else $("#duongDoi_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(duongDoi_Ngang))
            $("#duongDoi_Ngang").addClass("text-white bg-red-500");
        else $("#duongDoi_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(duongDoi_ChiSo))
            $("#duongDoi_ChiSo").addClass("text-white bg-red-500");
        else $("#duongDoi_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, duongDoi_ChiSo))
            $("#duongDoi_ChiSo").addClass("text-white bg-yellow-500");
        else $("#duongDoi_ChiSo").removeClass("text-white bg-yellow-500");

        $("#suMenhLon_Doc").html(suMenhLon_Doc);
        $("#suMenhLon_Ngang").html(suMenhLon_Ngang);
        $("#suMenhLon_ChiSo").html(suMenhLon_ChiSo);
        if (hasRedColor(suMenhLon_Doc))
            $("#suMenhLon_Doc").addClass("text-white bg-red-500");
        else $("#suMenhLon_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(suMenhLon_Ngang))
            $("#suMenhLon_Ngang").addClass("text-white bg-red-500");
        else $("#suMenhLon_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(suMenhLon_ChiSo))
            $("#suMenhLon_ChiSo").addClass("text-white bg-red-500");
        else $("#suMenhLon_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, suMenhLon_ChiSo))
            $("#suMenhLon_ChiSo").addClass("text-white bg-yellow-500");
        else $("#suMenhLon_ChiSo").removeClass("text-white bg-yellow-500");

        $("#ketNoi_Doc").html(ketNoi_Doc);
        $("#ketNoi_Ngang").html(ketNoi_Ngang);
        $("#ketNoi_ChiSo").html(ketNoi_ChiSo);
        if (hasRedColor(ketNoi_Doc))
            $("#ketNoi_Doc").addClass("text-white bg-red-500");
        else $("#ketNoi_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(ketNoi_Ngang))
            $("#ketNoi_Ngang").addClass("text-white bg-red-500");
        else $("#ketNoi_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(ketNoi_ChiSo))
            $("#ketNoi_ChiSo").addClass("text-white bg-red-500");
        else $("#ketNoi_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, ketNoi_ChiSo))
            $("#ketNoi_ChiSo").addClass("text-white bg-yellow-500");
        else $("#ketNoi_ChiSo").removeClass("text-white bg-yellow-500");

        $("#truongThanh_Doc").html(truongThanh_Doc);
        $("#truongThanh_Ngang").html(truongThanh_Ngang);
        $("#truongThanh_ChiSo").html(truongThanh_ChiSo);
        if (hasRedColor(truongThanh_Doc))
            $("#truongThanh_Doc").addClass("text-white bg-red-500");
        else $("#truongThanh_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(truongThanh_Ngang))
            $("#truongThanh_Ngang").addClass("text-white bg-red-500");
        else $("#truongThanh_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(truongThanh_ChiSo))
            $("#truongThanh_ChiSo").addClass("text-white bg-red-500");
        else $("#truongThanh_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, truongThanh_ChiSo))
            $("#truongThanh_ChiSo").addClass("text-white bg-yellow-500");
        else $("#truongThanh_ChiSo").removeClass("text-white bg-yellow-500");
        $("#linhHonNho_Doc").html(linhHonNho_Doc);
        $("#linhHonNho_Ngang").html(linhHonNho_Ngang);
        $("#linhHonNho_ChiSo").html(linhHonNho_ChiSo);
        if (hasRedColor(linhHonNho_Doc))
            $("#linhHonNho_Doc").addClass("text-white bg-red-500");
        else $("#linhHonNho_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(linhHonNho_Ngang))
            $("#linhHonNho_Ngang").addClass("text-white bg-red-500");
        else $("#linhHonNho_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(linhHonNho_ChiSo))
            $("#linhHonNho_ChiSo").addClass("text-white bg-red-500");
        else $("#linhHonNho_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, linhHonNho_ChiSo))
            $("#linhHonNho_ChiSo").addClass("text-white bg-yellow-500");
        else $("#linhHonNho_ChiSo").removeClass("text-white bg-yellow-500");

        $("#nhanCachLon_Doc").html(nhanCachLon_Doc);
        $("#nhanCachLon_Ngang").html(nhanCachLon_Ngang);
        $("#nhanCachLon_ChiSo").html(nhanCachLon_ChiSo);
        if (hasRedColor(nhanCachLon_Doc))
            $("#nhanCachLon_Doc").addClass("text-white bg-red-500");
        else $("#nhanCachLon_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(nhanCachLon_Ngang))
            $("#nhanCachLon_Ngang").addClass("text-white bg-red-500");
        else $("#nhanCachLon_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(nhanCachLon_ChiSo))
            $("#nhanCachLon_ChiSo").addClass("text-white bg-red-500");
        else $("#nhanCachLon_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, nhanCachLon_ChiSo))
            $("#nhanCachLon_ChiSo").addClass("text-white bg-yellow-500");
        else $("#nhanCachLon_ChiSo").removeClass("text-white bg-red-500");
        $("#nhanCachNho_Doc").html(nhanCachNho_Doc);
        $("#nhanCachNho_Ngang").html(nhanCachNho_Ngang);
        $("#nhanCachNho_ChiSo").html(nhanCachNho_ChiSo);
        if (hasRedColor(nhanCachNho_Doc))
            $("#nhanCachNho_Doc").addClass("text-white bg-red-500");
        else $("#nhanCachNho_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(nhanCachNho_Ngang))
            $("#nhanCachNho_Ngang").addClass("text-white bg-red-500");
        else $("#nhanCachNho_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(nhanCachNho_ChiSo))
            $("#nhanCachNho_ChiSo").addClass("text-white bg-red-500");
        else $("#nhanCachNho_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, nhanCachNho_ChiSo))
            $("#nhanCachNho_ChiSo").addClass("text-white bg-yellow-500");
        else $("#nhanCachNho_ChiSo").removeClass("text-white bg-yellow-500");

        $("#soMenhNho_Doc").html(soMenhNho_Doc);
        $("#soMenhNho_Ngang").html(soMenhNho_Ngang);
        $("#soMenhNho_ChiSo").html(soMenhNho_ChiSo);
        if (hasRedColor(soMenhNho_Doc))
            $("#soMenhNho_Doc").addClass("text-white bg-red-500");
        else $("#soMenhNho_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(soMenhNho_Ngang))
            $("#soMenhNho_Ngang").addClass("text-white bg-red-500");
        else $("#soMenhNho_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(soMenhNho_ChiSo))
            $("#soMenhNho_ChiSo").addClass("text-white bg-red-500");
        else $("#soMenhNho_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, soMenhNho_ChiSo))
            $("#soMenhNho_ChiSo").addClass("text-white bg-yellow-500");
        else $("#soMenhNho_ChiSo").removeClass("text-white bg-yellow-500");

        $("#ngaySinh_Doc").html(ngaySinh_Doc);
        $("#ngaySinh_Ngang").html(ngaySinh_Ngang);
        $("#ngaySinh_ChiSo").html(ngaySinh_ChiSo);
        if (hasRedColor(ngaySinh_Doc))
            $("#ngaySinh_Doc").addClass("text-white bg-red-500");
        else $("#ngaySinh_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(ngaySinh_Ngang))
            $("#ngaySinh_Ngang").addClass("text-white bg-red-500");
        else $("#ngaySinh_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(ngaySinh_ChiSo))
            $("#ngaySinh_ChiSo").addClass("text-white bg-red-500");
        else $("#ngaySinh_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, ngaySinh_ChiSo))
            $("#ngaySinh_ChiSo").addClass("text-white bg-yellow-500");
        else $("#ngaySinh_ChiSo").removeClass("text-white bg-yellow-500");

        $("#tuDuyHopLy_Doc").html(tuDuyHopLy_Doc);
        $("#tuDuyHopLy_Ngang").html(tuDuyHopLy_Ngang);
        $("#tuDuyHopLy_ChiSo").html(tuDuyHopLy_ChiSo);
        if (hasRedColor(tuDuyHopLy_Doc))
            $("#tuDuyHopLy_Doc").addClass("text-white bg-red-500");
        else $("#tuDuyHopLy_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(tuDuyHopLy_Ngang))
            $("#tuDuyHopLy_Ngang").addClass("text-white bg-red-500");
        else $("#tuDuyHopLy_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(tuDuyHopLy_ChiSo))
            $("#tuDuyHopLy_ChiSo").addClass("text-white bg-red-500");
        else $("#tuDuyHopLy_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, tuDuyHopLy_ChiSo))
            $("#tuDuyHopLy_ChiSo").addClass("text-white bg-yellow-500");
        else $("#tuDuyHopLy_ChiSo").removeClass("text-white bg-yellow-500");

        $("#thieu").html(thieu);

        $("#phanHoiTiemThuc_Doc").html(phanHoiTiemThuc_Doc);
        $("#phanHoiTiemThuc_ChiSo").html(phanHoiTiemThuc_Doc);
        if (hasRedColor(phanHoiTiemThuc_Doc))
            $("#phanHoiTiemThuc_Doc").addClass("text-white bg-red-500");
        else $("#phanHoiTiemThuc_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(phanHoiTiemThuc_ChiSo))
            $("#phanHoiTiemThuc_ChiSo").addClass("text-white bg-red-500");
        else $("#phanHoiTiemThuc_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, phanHoiTiemThuc_ChiSo))
            $("#phanHoiTiemThuc_ChiSo").addClass("text-white bg-yellow-500");
        else
            $("#phanHoiTiemThuc_ChiSo").removeClass("text-white bg-yellow-500");

        $("#diemBaoMat").html(diemBaoMat);
        $("#diemBaoMat_ChiSo").html(diemBaoMat_ChiSo);

        $("#soMenhNho_Doc").html(soMenhNho_Doc);
        $("#soMenhNho_Ngang").html(soMenhNho_Ngang);
        $("#soMenhNho_ChiSo").html(soMenhNho_ChiSo);
        if (hasRedColor(soMenhNho_Doc))
            $("#soMenhNho_Doc").addClass("text-white bg-red-500");
        else $("#soMenhNho_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(soMenhNho_Ngang))
            $("#soMenhNho_Ngang").addClass("text-white bg-red-500");
        else $("#soMenhNho_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(soMenhNho_ChiSo))
            $("#soMenhNho_ChiSo").addClass("text-white bg-red-500");
        else $("#soMenhNho_ChiSo").removeClass("text-white bg-red-500");
        if (hasYellowColor(diemBaoMat_ChiSo, soMenhNho_ChiSo))
            $("#soMenhNho_ChiSo").addClass("text-white bg-yellow-500");
        else $("#soMenhNho_ChiSo").removeClass("text-white bg-yellow-500");

        $("#soMenhLon_Doc").html(soMenhLon_Doc);
        $("#soMenhLon_Ngang").html(soMenhLon_Ngang);
        $("#soMenhLon_ChiSo").html(soMenhLon_ChiSo);
        if (hasRedColor(soMenhLon_Doc))
            $("#soMenhLon_Doc").addClass("text-white bg-red-500");
        else $("#soMenhLon_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(soMenhLon_Ngang))
            $("#soMenhLon_Ngang").addClass("text-white bg-red-500");
        else $("#soMenhLon_Ngang").removeClass("text-white bg-red-500");

        if (hasRedColor(soMenhLon_ChiSo))
            $("#soMenhLon_ChiSo").addClass("text-white bg-red-500");
        else $("#soMenhLon_ChiSo").remove("text-white bg-red-500");

        if (hasYellowColor(diemBaoMat_ChiSo, soMenhLon_ChiSo))
            $("#soMenhLon_ChiSo").addClass("text-white bg-yellow-500");
        else $("#soMenhLon_ChiSo").removeClass("text-white bg-yellow-500");

        $("#linhHonLon_Doc").html(linhHonLon_Doc);
        $("#linhHonLon_Ngang").html(linhHonLon_Ngang);
        $("#linhHonLon_ChiSo").html(linhHonLon_ChiSo);
        if (hasRedColor(linhHonLon_Doc))
            $("#linhHonLon_Doc").addClass("text-white bg-red-500");
        else $("#linhHonLon_Doc").removeClass("text-white bg-red-500");

        if (hasRedColor(linhHonLon_Ngang))
            $("#linhHonLon_Ngang").addClass("text-white bg-red-500");
        else $("#linhHonLon_Ngang").removeClass("text-white bg-red-500");

        if (hasRedColor(linhHonLon_ChiSo))
            $("#linhHonLon_ChiSo").addClass("text-white bg-red-500");
        else $("#linhHonLon_ChiSo").removeClass("text-white bg-red-500");

        if (hasYellowColor(diemBaoMat_ChiSo, linhHonLon_ChiSo))
            $("#linhHonLon_ChiSo").addClass("text-white bg-yellow-500");
        else $("#linhHonLon_ChiSo").removeClass("text-white bg-yellow-500");

        $("#namCaNhan_Doc").html(namCaNhan_Doc);
        $("#namCaNhan_Ngang").html(namCaNhan_Ngang);
        $("#thangCaNhan_Doc").html(thangCaNhan_Doc);
        $("#thangCaNhan_Ngang").html(thangCaNhan_Ngang);
        $("#ngayCaNhan_Doc").html(ngayCaNhan_Doc);
        $("#ngayCaNhan_Ngang").html(ngayCaNhan_Ngang);

        $("#thaiDo_Doc").html(thaiDo_Doc);
        $("#thaiDo_Ngang").html(thaiDo_Ngang);
        $("#thaiDo_ChiSo").html(thaiDo_ChiSo);
        if (hasRedColor(thaiDo_Doc))
            $("#thaiDo_Doc").addClass("text-white bg-red-500");
        else $("#thaiDo_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(thaiDo_Ngang))
            $("#thaiDo_Ngang").addClass("text-white bg-red-500");
        else $("#thaiDo_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(thaiDo_ChiSo))
            $("#thaiDo_ChiSo").addClass("text-white bg-red-500");
        else $("#thaiDo_ChiSo").removeClass("text-white bg-red-500");

        $("#canBang_Doc").html(
            canBang_Doc.bieuThuc + " = " + canBang_Doc.ketQua
        );
        $("#canBang_Ngang").html(
            canBang_Ngang.bieuThuc + " = " + canBang_Ngang.ketQua
        );
        $("#canBang_ChiSo").html(canBang_ChiSo);
        if (hasRedColor(canBang_Doc))
            $("#canBang_Doc").addClass("text-white bg-red-500");
        else $("#canBang_Doc").removeClass("text-white bg-red-500");
        if (hasRedColor(canBang_Ngang))
            $("#canBang_Ngang").addClass("text-white bg-red-500");
        else $("#canBang_Ngang").removeClass("text-white bg-red-500");
        if (hasRedColor(canBang_ChiSo))
            $("#canBang_ChiSo").addClass("text-white bg-red-500");
        else $("#canBang_ChiSo").removeClass("text-white bg-red-500");

        $("#thuThach1").html(thuThach1);
        $("#thuThach2").html(thuThach2);
        $("#thuThach3").html(thuThach3);
        $("#thuThach4").html(thuThach4);

        $("#tuoiDinhCao1").html(namVaTuoiDinhCao1);
        $("#tuoiDinhCao2").html(namVaTuoiDinhCao2);
        $("#tuoiDinhCao3").html(namVaTuoiDinhCao3);
        $("#tuoiDinhCao4").html(namVaTuoiDinhCao4);

        $("#dinh1").html(dinh1_Doc + " - " + dinh1_Ngang);
        $("#dinh2").html(dinh2_Doc + " - " + dinh2_Ngang);
        $("#dinh3").html(dinh3_Doc + " - " + dinh3_Ngang);
        $("#dinh4").html(dinh4_Doc + " - " + dinh4_Ngang);

        $("#namDinhCaoSo4_Thu1").html(dinhCaoSo4_Thu1);
        $("#namDinhCaoSo4_Thu2").html(dinhCaoSo4_Thu2);
        $("#namDinhCaoSo4_Thu3").html(dinhCaoSo4_Thu3);
        $("#namDinhCaoSo4_Thu4").html(dinhCaoSo4_Thu4);

        $("#chuKyVongDoi1").html(baChuKyVongDoi.split("-")[0]);
        $("#chuKyVongDoi2").html(baChuKyVongDoi.split("-")[1]);
        $("#chuKyVongDoi3").html(baChuKyVongDoi.split("-")[2]);

        updateBieuDoNgaySinh(bieuDoNgaySinh);

        var tongHopChiSo = {
            duong_doi: duongDoi_ChiSo,
            ket_noi: ketNoi_ChiSo,
            truong_thanh: truongThanh_ChiSo,
            nang_luc: inputNgay,
            tu_duy_hop_ly: tuDuyHopLy_ChiSo,
            thieu: thieu.split(" - "),
            phan_hoi_tiem_thuc: phanHoiTiemThuc_Doc,
            diem_bao_mat: diemBaoMat_ChiSo,
            linh_hon_lon: linhHonLon_ChiSo,
            linh_hon_nho: linhHonNho_ChiSo,
            nhan_cach_lon: nhanCachLon_ChiSo,
            nhan_cach_nho: nhanCachNho_ChiSo,
            su_menh_lon: suMenhLon_ChiSo,
            su_menh_nho: soMenhNho_ChiSo,
            nam_ca_nhan: getChiSo(namCaNhan_Doc, namCaNhan_Ngang, false),
            no_nghiep: noNghiep,
            chu_ky_vong_doi: baChuKyVongDoi.split("-"),
            dinh_cao: [
                getChiSo(dinh1_Doc, dinh1_Ngang),
                getChiSo(dinh2_Doc, dinh2_Ngang),
                getChiSo(dinh3_Doc, dinh3_Ngang),
                getChiSo(dinh4_Doc, dinh4_Ngang),
            ],
            thu_thach: [
                getChiSo(thuThach1_Doc, thuThach1_Ngang),
                getChiSo(thuThach2_Doc, thuThach2_Ngang),
                getChiSo(thuThach3_Doc, thuThach3_Ngang),
                getChiSo(thuThach4_Doc, thuThach4_Ngang),
            ],
        };
        var pass_tsh = Pass_TSH(tongHopChiSo);
        $("#pass_tsh").html(pass_tsh);
    });
});
