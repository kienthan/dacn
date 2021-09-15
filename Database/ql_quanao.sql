-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th8 29, 2021 lúc 01:04 PM
-- Phiên bản máy phục vụ: 10.4.20-MariaDB
-- Phiên bản PHP: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ql_quanao`
--

DELIMITER $$
--
-- Thủ tục
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `CAPNHATSP` (IN `mamh` INT, IN `tenmh` VARCHAR(200), IN `idphanloai` INT, IN `idsale` INT, IN `url` TEXT, IN `idbrand` INT, IN `mota` TEXT, IN `idgia` INT, IN `soluongton` INT, IN `img` TEXT, IN `tinhtrang` VARCHAR(50), OUT `kq` VARCHAR(300))  BEGIN
	IF (mamh ='' && tenmh = '' && idphanloai = '' && idsale ='') THEN
    SET kq = 'Không có đủ dữ liệu để nhập';
    ELSEIF (url ='' && idbrand ='' && mota =''&&idgia ='') THEN
    SET kq = 'Không có đủ dữ liệu để nhập';
    ELSEIF (soluongton ='' &&  img ='' &&tinhtrang ='') THEN
    SET kq = 'Không có đủ dữ liệu để nhập';
    ELSE
        
        
        UPDATE `chitietmathang` 
        SET `idbrand`=idbrand,`mota`=mota,`idgia`=idgia,`soluongton`=soluongton,`img`=img,`tinhtrang`=tinhtrang 
        WHERE `mactmh`= mamh;
        UPDATE `mathang` SET `mathang`.`tenmh`=tenmh,`mathang`.`idphanloai`=idphanloai,
        `mathang`.`idsale`=idsale,`mathang`.`url`=url 			
        WHERE `mathang`.`mamh` = mamh;
        SET kq = 'Cập nhật dữ liệu thành công';
        END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ThemSP` (IN `mamh` INT, IN `tenmh` VARCHAR(200), IN `idphanloai` INT, IN `idsale` INT, IN `url` TEXT, IN `idbrand` INT, IN `mota` TEXT, IN `idgia` INT, IN `soluongton` INT, IN `img` TEXT, IN `tinhtrang` VARCHAR(50), OUT `kq` VARCHAR(300))  BEGIN
	IF (mamh ='' && tenmh = '' && idphanloai = '' && idsale ='') THEN
    SET kq = 'Không có đủ dữ liệu để nhập';
    ELSEIF (url ='' && idbrand ='' && mota =''&&idgia ='') THEN
    SET kq = 'Không có đủ dữ liệu để nhập';
    ELSEIF (soluongton ='' &&  img ='' &&tinhtrang ='') THEN
    SET kq = 'Không có đủ dữ liệu để nhập';
    ELSE
        INSERT INTO `MATHANG` (`tenmh`, `idphanloai`, `idsale`, `url`) 
        VALUES 	(tenmh,idphanloai, idsale, url);
        
        INSERT INTO `CHITIETMATHANG` (`mactmh`, `idbrand`, `mota`, `idgia`, `soluongton`, `img`, `tinhtrang`) 
		VALUES 	(mamh,idbrand,mota,idgia,soluongton,img,tinhtrang);
        SET kq = 'Nhập dữ liệu thành công';
        END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `THEM_CTHOADON` (IN `mahd` INT, IN `mamh` INT, IN `soluong` INT, IN `thanhtien` DOUBLE, OUT `kq` VARCHAR(300))  BEGIN
    IF (mahd ='' && mamh = '' && soluong = 0 && thanhtien =0) THEN
    SET kq = 'Không có đủ dữ liệu để nhập';
    ELSE
	INSERT INTO `chitiethoadon` (`mahd`,`mamh`,`soluong`,`thanhtien`)
    VALUES (mahd,mamh,soluong,thanhtien);
    SET kq = 'Nhập dữ liệu thành công';
    END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `THEM_HOADON` (IN `mahd` INT, IN `sdt` INT, IN `ngaymua` DATE, IN `diachi` VARCHAR(200), IN `ghichu` TEXT, IN `tongtien` DOUBLE, OUT `kq` VARCHAR(300))  BEGIN
    IF (mahd = '' && sdt = '' && diachi = '' && tongtien = 0) THEN
    SET kq = 'Số điện thoại và địa chỉ không được trống';
    ELSEIF (ngaymua = '') THEN 
    SET kq = 'Ngày mua hàng không xác định';
    ELSE
	INSERT INTO `hoadon` (`mahd`,`sdt`,`ngaymua`,`diachigiaohang`,`ghichu`,`tongtien`)
    VALUES ( mahd, sdt, ngaymua, diachi, ghichu, tongtien);
    END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `XOASP` (IN `mamh` INT, OUT `kq` VARCHAR(300))  BEGIN
        IF (mamh ='') THEN
        SET kq = 'Không có đủ dữ liệu để nhập';
    ELSE
	SET GLOBAL FOREIGN_KEY_CHECKS=0;
      	DELETE FROM `chitietmathang` WHERE `mactmh`= mamh;
       	DELETE FROM `mathang` WHERE `mamh` = mamh;
      	SET kq = 'Xoá thành công';
        END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`username`, `password`) VALUES
('adminshop', '123456'),
('quantrivien', '1111');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand`
--

CREATE TABLE `brand` (
  `idbrand` int(11) NOT NULL,
  `brandname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `brand`
--

INSERT INTO `brand` (`idbrand`, `brandname`) VALUES
(1, 'H&M'),
(2, 'ZARA'),
(3, 'Catsa'),
(4, 'Bambo'),
(5, 'Routine'),
(6, 'YaMe'),
(7, '4men'),
(8, 'Uniqlo');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitiethoadon`
--

CREATE TABLE `chitiethoadon` (
  `mahd` int(11) NOT NULL,
  `mamh` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `thanhtien` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `chitiethoadon`
--

INSERT INTO `chitiethoadon` (`mahd`, `mamh`, `soluong`, `thanhtien`) VALUES
(200820210, 8, 1, 379000),
(200820210, 9, 1, 379000),
(200820211, 7, 2, 644300),
(200820211, 8, 2, 644300),
(200820211, 10, 2, 644300),
(200820211, 11, 1, 644300);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietmathang`
--

CREATE TABLE `chitietmathang` (
  `mactmh` int(11) NOT NULL,
  `idbrand` int(11) NOT NULL,
  `mota` text DEFAULT NULL,
  `idgia` int(11) NOT NULL,
  `soluongton` int(11) NOT NULL,
  `img` text NOT NULL,
  `tinhtrang` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `chitietmathang`
--

INSERT INTO `chitietmathang` (`mactmh`, `idbrand`, `mota`, `idgia`, `soluongton`, `img`, `tinhtrang`) VALUES
(1, 1, '5-pocket jeans in stretch cotton denim. Regular waist, zip fly with button, and skinny legs.\r\n		', 1, 20, 'Skinny_Jeans.jfif', 'New 100%'),
(2, 1, '5-pocket jeans in stretch cotton denim. Regular waist, zip fly with button, and slim legs.\r\n		', 1, 35, 'Slim_Jeans.jfif', 'New 100%'),
(3, 1, 'T-shirt in soft cotton slub jersey. Slightly wider neckline, seam at center back, and slightly longer, rounded back section. Raw, rolled edges at neckline and cuffs.\r\n		', 2, 18, 'Raw_Edge_T_Shirt.jfif', 'New 100%'),
(4, 2, 'Vải chính: 100% cotton. Vải phụ: 97% vải cotton, 3% elastane\r\n		', 3, 28, 'Short_Bermuda.jpg', 'New 100%'),
(5, 2, '100% vải cotton\r\n		', 4, 30, 'Oxford_ke.jpg', 'New 100%'),
(6, 2, '83% vải cotton, 17% vải thun vitcô\r\n		', 4, 25, 'Oxford_kesoc.jpg', 'New 100%'),
(7, 3, 'Dáng áo form rộng phù hợp cho hầu hết các dáng người.\nLà những sản phẩm rất được ưa chuộng khi đề cao sự phóng khoáng, tự tin, thoải mái nhưng cũng đầy năng động.\nLuôn bắt kịp xu hướng thời đại để đáp lại tình cảm yêu mến dành cho những tín đồ yêu thích sự đơn giản, nhưng vẫn giữ nét cá tính trong thời trang.\nThích hợp đi học, đi chơi, dạo phố, …\nChất liệu: cotton.\r\n		', 5, 50, 'thunden.jfif', 'New 100%'),
(8, 3, 'Dáng áo form rộng phù hợp cho hầu hết các dáng người.\nLà những sản phẩm rất được ưa chuộng khi đề cao sự phóng khoáng, tự tin, thoải mái nhưng cũng đầy năng động.\nLuôn bắt kịp xu hướng thời đại để đáp lại tình cảm yêu mến dành cho những tín đồ yêu thích sự đơn giản, nhưng vẫn giữ nét cá tính trong thời trang.\nThích hợp đi học, đi chơi, dạo phố, …\nChất liệu: cotton.\r\n		', 5, 43, 'thunden_1.jfif', 'New 100%'),
(9, 3, 'Quần kaki trơn form dáng rộng rãi, dễ mặc, không quá ôm sát.\nThiết kế dành cho người yêu thích sự đơn giản với hai túi chéo trước và túi sau.\nĐơn giản, thoải mái, phù hợp nhiều hoàn cảnh.\nThích hợp mặc quanh năm.\nChất liệu: kaki.\r\n		', 5, 41, 'kaki_xanhden.jfif', 'New 100%'),
(10, 4, 'Chất liệu : 92% Cotton , 8% Spandex.\r\n		', 6, 20, 'MI-BB-Q101.jpg', 'New 100%'),
(11, 4, 'Chất liệu : 92% Cotton , 8% Spandex.\r\n		', 6, 20, 'MI-BB-Q101_1.jpg', 'New 100%'),
(12, 4, 'Chất liệu : 92% Cotton , 8% Spandex.\r\n		', 6, 20, 'MI-BB-Q101_2.jpg', 'New 100%'),
(13, 4, 'Chất liệu : 92% Cotton , 8% Spandex.\r\n		', 6, 20, 'MI-BB-Q101_3.jpg', 'New 100%'),
(14, 5, 'Chất liệu : 100% Cotton.\r\n		', 5, 20, 'polo_1.jpg', 'New 100%'),
(15, 5, 'Chất liệu : 100% Cotton.\r\n		', 5, 20, 'polo_2.jpg', 'New 100%'),
(16, 5, 'Chất liệu : 100% Cotton.', 5, 20, 'polo_3.jpg', 'New 100%'),
(17, 7, '\r\n		', 7, 20, 'somi_1.png', 'New 100%'),
(18, 7, '\r\n		', 7, 20, 'somi_2.png', 'New 100%'),
(19, 7, '\r\n		', 7, 20, 'somi_3.png', 'New 100%'),
(20, 7, '\r\n		', 7, 20, 'somi_4.png', 'New 100%'),
(21, 8, '\r\n		', 8, 32, 'uniqlo_1.jpg', 'New 100%'),
(22, 8, '\r\n		', 9, 32, 'uniqlo_2.jpg', 'New 100%'),
(23, 8, '\r\n		', 9, 32, 'uniqlo_3.jpg', 'New 100%'),
(24, 8, '\r\n		', 8, 32, 'uniqlo_4.jpg', 'New 100%'),
(25, 8, '\r\n		', 1, 45, 'uniqlo_5.jpg', 'New 100%'),
(26, 8, '\r\n		', 1, 45, 'uniqlo_6.jpg', 'New 100%'),
(27, 2, 'Áo sơ mi dáng Relaxed Fit, cổ ve nhọn khoét chữ K, cộc tay, gấu xẻ 2 bên, cài khuy phía trước.\nChất liệu: 70% vải cotton và 30% vải lanh\r\n		', 4, 45, 'somi_zara_1.jpg', 'New 100%'),
(28, 2, 'Áo sơ mi vải cotton, cổ ve lật, cộc tay, có một túi đáp trước ngực, cài khuy phía trước.\nChất liệu: \nVải chính: 100% vải cotton. \nVải phụ: 100% vải cotton.\r\n		', 4, 45, 'somi_zara_2.jpg', 'New 100%'),
(29, 2, 'Áo Polo vải rũ bằng sợi sinh học Lyocell, cổ ve lật, cài khuy phía trước, dài tay, gấu xẻ 2 bên. \nChất liệu: tối thiểu 95% là sợi TENCEL™ Lyocell.\r\n		', 4, 45, 'polo_zara_1.jpg', 'New 100%'),
(30, 2, 'Áo Polo dáng rộng, cổ ve lật, cài khuy phía trước, cộc tay, Phía trước có 1 miếng đáp logo SMILEY, bo viền bằng vải gân. \nChất liệu: 45% vải pôliexte - 40% vải cotton - 15% vải thun vitcô.\r\n		', 4, 45, 'polo_zara_2.jpg', 'New 100%'),
(31, 2, 'Áo Polo vải Linen, cổ Polo có hàng khuy cài phía trước, dài tay. \nChất liệu: 100% vải lanh.\r\n		', 11, 45, 'polo_zara_3.jpg', 'New 100%'),
(32, 2, 'Áo Polo vải sợi Lyocell, cổ ve lật, cài khuy phía trước, cộc tay, bo viền bằng len gân. \nChất liệu: 100% sợi Lyocell.\r\n		', 11, 45, 'polo_zara_4.jpg', 'New 100%'),
(33, 2, 'Áo Polo dáng Relaxed Fit, cổ ve lật, cộc tay, gấu xẻ 2 bên, cài khuy phía trước. \nChất liệu: 100% vải cotton.\r\n		', 11, 45, 'polo_zara_5.jpg', 'New 100%'),
(34, 2, 'Knit Polo Shirt vải hỗn hợp visco, cổ áo có đường viền cổ chữ V, cộc tay. \nChất liệu: \nVải chính: 86% vải thun vitcô - 14% vải pôliexte. \nChi tiết: 100% vải thun vitcô\r\n		', 11, 45, 'polo_zara_6.jpg', 'New 100%'),
(35, 2, 'Áo Polo có cổ ngắn, cộc tay. \nChất liệu: 81% vải thun vitcô - 19% vải pôliexte.\r\n		', 4, 45, 'polo_zara_7.jpg', 'New 100%'),
(36, 2, 'Áo len được làm bằng cách kéo sợi cotton, cộc tay, cổ áo khoét hình chữ V. \nChất liệu: 100% vải cotton.\r\n		', 4, 45, 'polo_zara_8.jpg', 'New 100%'),
(37, 2, 'Áo Polo cổ ve lật, tay ngắn, gấu xẻ 2 bên, bo viền bằng vải gân, cài khuy phía trước. \nChất liệu: 100% vải cotton.\r\n		', 10, 45, 'polo_zara_9.jpg', 'New 100%'),
(38, 2, 'Áo Polo cổ ve lật, tay ngắn, gấu xẻ 2 bên, bo viền bằng vải gân, cài khuy phía trước. \nChất liệu: 100% vải cotton.\r\n		', 10, 45, 'polo_zara_10.jpg', 'New 100%'),
(39, 2, 'Áo Polo cổ thẳng đứng, tay ngắn, gấu xẻ 2 bên, bo viền bằng vải gân, cài khuy phía trước. \nChất liệu: \nVải chính: 100% vải cotton. \nVải phụ: 92% vải pôliexte - 7% vải cotton - 1% elastane.\r\n		', 10, 45, 'polo_zara_11.jpg', 'New 100%'),
(40, 2, 'Áo Polo dệt kim, cổ chữ V có ve lật, tay ngắn, bo viền bằng vải gân. \nChất liệu: 100% vải cotton.\r\n		', 11, 45, 'polo_zara_12.jpg', 'New 100%'),
(41, 2, 'Áo phông dáng rộng, cổ tròn, cộc tay, in logo Smiley. \nChất liệu: 100% vải cotton.\r\n		', 10, 45, 't-shirt_zara_1.jpg', 'New 100%'),
(42, 2, 'Áo nỉ dáng rộng, cổ tròn, cộc tay, in logo Smiley phía trước và sau lưng. Kiểu bạc màu, bo viền bằng vải gân. \nChất liệu: 100% vải cotton.\r\n		', 4, 45, 't-shirt_zara_2.jpg', 'New 100%'),
(43, 2, 'Áo phông dáng rộng, cổ tròn, cộc tay, có miếng đáp trang trí phía trước và in logo Smiley sau lưng. Kiểu bạc màu. \nChất liệu: 100% vải cotton.\r\n		', 10, 45, 't-shirt_zara_3.jpg', 'New 100%'),
(44, 2, 'Áo phông vải cotton co giãn, cổ tròn, cộc tay. \nChất liệu: 96% vải cotton - 4% elastane.\r\n		', 6, 45, 't-shirt_zara_4.jpg', 'New 100%'),
(45, 2, 'Áo phông vải cotton dệt kim, cổ tròn, cộc tay, in họa tiết khác màu sau lưng, bo viền bằng vải gân. \nChất liệu: 96% vải cotton - 4% elastane.\r\n		', 11, 45, 't-shirt_zara_5.jpg', 'New 100%'),
(46, 2, 'Áo phông dáng rộng, cổ tròn, cộc tay, in họa tiết khác màu ở phía trước và sau lưng. \nChất liệu: 100% vải cotton.\r\n		', 10, 45, 't-shirt_zara_6.jpg', 'New 100%'),
(47, 2, 'Áo phông cổ tròn, cộc tay, in họa tiết khác màu phía trước. \nChất liệu: 100% vải cotton.\r\n		', 10, 45, 't-shirt_zara_7.jpg', 'New 100%'),
(48, 2, 'Áo phông dáng rộng, cổ tròn, cộc tay. \nChất liệu: 95% vải pôliexte - 5% elastane.\r\n		', 10, 45, 't-shirt_zara_8.jpg', 'New 100%'),
(49, 2, 'Áo phông dáng rộng, cổ tròn, cộc tay, có một túi đáp trước ngực. \nChất liệu: 100% vải pôliexte.\r\n		', 10, 45, 't-shirt_zara_9.jpg', 'New 100%'),
(50, 2, 'Áo phông dáng rộng, cổ tròn, cộc tay, có một túi đáp trước ngực. \nChất liệu: 100% vải cotton.\r\n		', 10, 45, 't-shirt_zara_10.jpg', 'New 100%'),
(51, 2, 'Áo phông vải cotton compact, dáng rộng, cổ tròn, cộc tay. \nChất liệu: 100% vải cotton.\r\n		', 12, 45, 't-shirt_zara_11.jpg', 'New 100%'),
(52, 2, 'Áo phông vải cotton dệt kim, cổ tròn, cộc tay. \nChất liệu: 100% vải cotton.\r\n		', 12, 45, 't-shirt_zara_12.jpg', 'New 100%'),
(53, 2, 'Áo phông vải cotton dệt kim, cổ tròn, cộc tay. \nChất liệu: 100% vải cotton.\r\n		', 12, 45, 't-shirt_zara_13.jpg', 'New 100%'),
(54, 2, 'Áo phông dáng Regular Fit, vải có bề mặt bóng nhẹ, cổ tròn bo viền bằng vải gân, cộc tay. \nChất liệu: 100% vải cotton.\r\n		', 6, 45, 't-shirt_zara_14.jpg', 'New 100%'),
(55, 2, 'Quần Jeans dáng Skinny Fit, có 5 túi, kiểu bạc màu. Cài phía trước bằng khóa kéo và khuy kim loại. \nChất liệu: 98% vải cotton - 2% elastane.\r\n		', 11, 45, 'jean_zara_1.jpg', 'New 100%'),
(56, 2, 'Quần Jeans dáng Skinny Fit, có 5 túi: 3 túi phía trước và 2 túi phía sau. Cài khuy phía trước. \nChất liệu: 60% vải cotton - 40% vải pôliexte.\r\n		', 4, 45, 'jean_zara_2.jpg', 'New 100%'),
(57, 2, 'Quần Jeans dáng Skinny Fit, có 5 túi và 2 túi vuông có nắp hai bên ống quần, kiểu bạc màu, gấu quần điều chỉnh được bằng khóa kéo. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: 98% vải cotton - 2% elastane\r\n		', 4, 45, 'jean_zara_3.jpg', 'New 100%'),
(58, 2, 'Quần Jeans có 5 túi, kiểu bạc màu. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: 95% vải cotton - 3% vải pôliexte - 2% elastane.\r\n		', 4, 45, 'jean_zara_4.jpg', 'New 100%'),
(59, 2, 'Quần Jeans dáng Skinny Fit, có 5 túi, vải hiệu ứng bạc màu, ống quần trang trí các chi tiết rách có miếng đáp ở bên trong. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: 65% nhựa polyester - 35% vải cotton.\r\n		', 13, 45, 'jean_zara_5.jpg', 'New 100%'),
(60, 2, 'Quần Jeans ống bó, có 5 túi, kiểu bạc màu, trang trí chi tiết rách trên ống quần, gấu kiểu xỏ chỉ. Cài phía trước bằng khóa kéo và khuy kim loại. \nChất liệu: 96% vải cotton - 3% elastomultiester - 1% elastane.\r\n		', 4, 45, 'jean_zara_6.jpg', 'New 100%'),
(61, 2, 'Quần Jeans dáng Skinny Fit, kiểu bạc màu, trang trí các chi tiết rách trên ống quần, có 5 túi, cài phía trước bằng khóa kéo và khuy. \nChất liệu: 99% vải cotton - 1% elastane.\r\n		', 13, 45, 'jean_zara_7.jpg', 'New 100%'),
(62, 2, 'Quần Jeans dáng Skinny Fit, có 5 túi, có các miếng đáp cùng màu trang trí trên ống quần, kiểu bạc màu. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: 99% vải cotton - 1% elastane.\r\n		', 13, 45, 'jean_zara_8.jpg', 'New 100%'),
(63, 2, 'Quần Jeans dáng Slim Fit, có 5 túi, kiểu bạc màu, ống lửng cắt cúp. Cài khuy phía trước. \nChất liệu: 57% vải cotton - 43% sợi lyocell.\r\n		', 4, 45, 'jean_zara_9.jpg', 'New 100%'),
(64, 2, 'Quần Jeans dáng Slim Fit, có 5 túi, kiểu bạc màu. Cài khuy phía trước. \nChất liệu: 100% vải cotton.\r\n		', 4, 45, 'jean_zara_10.jpg', 'New 100%'),
(65, 2, 'Quần Jeans dáng Straight Fit, có 5 túi, vải bạc màu, phong cách Vintage. Cài khuy phía trước. \nChất liệu: 100% vải cotton.\r\n		', 4, 45, 'jean_zara_11.jpg', 'New 100%'),
(66, 2, 'Quần Jeans dáng Skinny Fit, có 5 túi, kiểu bạc màu, ống quần cắt cúp. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: \nLớp ngoài: 99% vải cotton - 1% elastane. \nLớp lót: 100% vải cotton.\r\n		', 4, 45, 'jean_zara_12.jpg', 'New 100%'),
(67, 2, 'Quần Jeans dáng Skinny Fit, có 5 túi,đáp túi vuông 2 bên ống quần , kiểu bạc màu, gấu quần được điều chỉnh bằng khóa kéo. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: 98% vải cotton - 2% elastane.\r\n		', 4, 45, 'jean_zara_13.jpg', 'New 100%'),
(68, 3, 'Quần kaki trơn form dáng rộng rãi, dễ mặc, không quá ôm sát. Thiết kế dành cho người yêu thích sự đơn giản với hai túi chéo trước và túi sau. Đơn giản, thoải mái, phù hợp nhiều hoàn cảnh.\r\n		', 6, 45, 'kaki_catsa_1.jfif', 'New 100%'),
(69, 3, 'Quần kaki trơn form dáng rộng rãi, dễ mặc, không quá ôm sát. Thiết kế dành cho người yêu thích sự đơn giản với hai túi chéo trước và túi sau. Đơn giản, thoải mái, phù hợp nhiều hoàn cảnh.\r\n		', 6, 45, 'kaki_catsa_2.jfif', 'New 100%'),
(70, 3, 'Quần kaki trơn form dáng rộng rãi, dễ mặc, không quá ôm sát. Thiết kế dành cho người yêu thích sự đơn giản với hai túi chéo trước và túi sau. Đơn giản, thoải mái, phù hợp nhiều hoàn cảnh.\r\n		', 6, 45, 'kaki_catsa_3.jfif', 'New 100%'),
(71, 3, 'Quần kaki trơn form dáng rộng rãi, dễ mặc, không quá ôm sát. Thiết kế dành cho người yêu thích sự đơn giản với hai túi chéo trước và túi sau. Đơn giản, thoải mái, phù hợp nhiều hoàn cảnh.\r\n		', 6, 45, 'kaki_catsa_4.jfif', 'New 100%'),
(72, 3, 'Quần kaki trơn form dáng rộng rãi, dễ mặc, không quá ôm sát. Thiết kế dành cho người yêu thích sự đơn giản với hai túi chéo trước và túi sau. Đơn giản, thoải mái, phù hợp nhiều hoàn cảnh.\r\n		', 6, 45, 'kaki_catsa_5.jfif', 'New 100%'),
(73, 3, 'Quần kaki trơn form dáng rộng rãi, dễ mặc, không quá ôm sát. Thiết kế dành cho người yêu thích sự đơn giản với hai túi chéo trước và túi sau. Đơn giản, thoải mái, phù hợp nhiều hoàn cảnh.\r\n		', 6, 45, 'kaki_catsa_6.jfif', 'New 100%'),
(74, 3, 'Quần kaki trơn form dáng rộng rãi, dễ mặc, không quá ôm sát. Thiết kế dành cho người yêu thích sự đơn giản với hai túi chéo trước và túi sau. Đơn giản, thoải mái, phù hợp nhiều hoàn cảnh.\r\n		', 6, 45, 'kaki_catsa_7.jfif', 'New 100%'),
(75, 3, 'Quần kaki trơn form dáng rộng rãi, dễ mặc, không quá ôm sát. Thiết kế dành cho người yêu thích sự đơn giản với hai túi chéo trước và túi sau. Đơn giản, thoải mái, phù hợp nhiều hoàn cảnh.\r\n		', 6, 45, 'kaki_catsa_8.jfif', 'New 100%'),
(76, 6, 'Chất liệu: Kaki Thun. Thành phần: 97% cotton - 3% spandex.\r\n		', 7, 45, 'kaki_yame_1.jpg', 'New 100%'),
(77, 6, 'Chất liệu: Kaki Thun. Thành phần: 97% cotton - 3% spandex.\r\n		', 3, 45, 'kaki_yame_2.jpg', 'New 100%'),
(78, 6, 'Chất liệu: Kaki Thun. Thành phần: 97% cotton - 3% spandex.\r\n		', 3, 45, 'kaki_yame_3.jpg', 'New 100%'),
(79, 6, 'Chất liệu: Kaki Thun. Thành phần: 97% cotton - 3% spandex.\r\n		', 3, 45, 'kaki_yame_4.jpg', 'New 100%'),
(80, 6, 'Chất liệu: Kaki Thun. Thành phần: 97% cotton - 3% spandex.\r\n		', 3, 45, 'kaki_yame_5.jpg', 'New 100%'),
(81, 6, 'Chất liệu: Kaki Thun. Thành phần: 97% cotton - 3% spandex.\r\n		', 3, 45, 'kaki_yame_6.jpg', 'New 100%'),
(82, 2, 'Quần short Bermuda cạp co giãn, điều chỉnh bằng dây rút, xếp li phía trước, có 2 túi phía trước và 2 túi đáp có nắp phía sau. \nChất liệu: \nVải chính: 90% vải cotton - 10% vải pôliexte. \nTrang trí: 100% vải thun vitcô.\r\n		', 11, 45, 'short_zara_1.jpg', 'New 100%'),
(83, 2, 'Quần short Bermuda cạp co giãn, điều chỉnh bằng dây rút, có 2 túi phía trước và 2 túi đáp phía sau, kiểu bạc màu. \nChất liệu: 100% vải cotton .\r\n		', 11, 45, 'short_zara_2.jpg', 'New 100%'),
(84, 2, 'Quần short Bermuda cạp co giãn, điều chỉnh bằng dây rút, có túi 2 bên, in chữ khác màu dưới gấu. \nChất liệu: \nLớp ngoài: 100% vải pôliexte. \nLớp lót: 100% vải pôliexte.\r\n		', 11, 45, 'short_zara_3.jpg', 'New 100%'),
(85, 2, 'Quần short Bermuda có 5 túi, kiểu bạc màu, trang trí các chi tiết rách trên ống quần, in họa tiết kiểu vẩy sơn, gấu rách, kiểu xỏ chỉ. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: 100% vải cotton.\r\n		', 4, 45, 'short_zara_4.jpg', 'New 100%'),
(86, 2, 'Quần short Bermuda ống rộng, có 5 túi, kiểu bạc màu, cài khuy phía trước. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: 100% vải cotton.\r\n		', 10, 45, 'short_zara_5.jpg', 'New 100%'),
(87, 2, 'Quần short Bermuda vải cotton co giãn, có 2 túi phía trước và 2 túi may viền phía sau, gấu lật. \nChất liệu: 97% vải cotton - 3% elastane.\r\n		', 11, 45, 'short_zara_6.jpg', 'New 100%'),
(88, 2, 'Quần short Bermuda vải cotton co giãn, dây lưng quần co giãn và có thể điều chỉnh được, có 2 túi phía trước và 2 túi phía sau. \nChất liệu: 100% vải cotton.\r\n		', 11, 45, 'short_zara_7.jpg', 'New 100%'),
(89, 2, 'Quần short Bermuda dáng Relaxed Fit, cạp co giãn có dây rút để điều chỉnh. Có 2 túi phía trước và 1 túi đáp phía sau. \nChất liệu: 100% vải cotton.\r\n		', 11, 45, 'short_zara_8.jpg', 'New 100%'),
(90, 2, 'Quần short Bermuda dáng Wide Fit, cạp co giãn, xếp li phía trước và túi may viền cài khuy phía sau. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: 64% vải cotton - 33% nylon - 3% elastane.\r\n		', 4, 45, 'short_zara_9.jpg', 'New 100%'),
(91, 2, 'Quần short Bermuda vải cotton co giãn, dáng Relaxed Fit, cạp co giãn, có 2 túi phía trước và 1 túi vuông có nắp phía sau. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: 97% vải cotton - 3% elastane.\r\n		', 11, 45, 'short_zara_10.jpg', 'New 100%'),
(92, 2, 'Quần short Bermuda dáng Regular Fit, cạp co giãn, có 2 túi phía trước và 1 túi phía sau. Cài phía trước bằng khóa kéo và khuy. \nChất liệu: 58% vải cotton - 39% vải pôliexte - 3% elastane.\r\n		', 11, 45, 'short_zara_11.jpg', 'New 100%'),
(93, 2, 'Quần short Bermuda cạp co giãn, điều chỉnh bằng dây rút, có 2 túi phía trước và 2 túi phía sau, kiểu bạc màu. \nChất liệu: 77% vải cotton - 21% vải pôliexte - 2% elastane.\r\n		', 11, 45, 'short_zara_12.jpg', 'New 100%'),
(94, 2, 'Áo khoác Blazer vải co giãn, cổ ve lật, ve áo nhọn, dài tay, cổ tay cài khuy, có túi may viền 2 bên hông. Có 1 túi ở lớp vải lót bên trong, gấu xẻ chính giữa phía sau, vạt đắp chéo, cài khuy phía trước. \nChất liệu: \nLớp ngoài: 72% vải pôliexte - 25% len - 3% elastane. \nLớp lót: \nKiểu body: 95% vải pôliexte - 5% elastane. \nTay áo: 100% vải pôliexte.\r\n		', 14, 45, 'blazer_zara_1.jpg', 'New 100%'),
(95, 2, 'Áo khoác Blazer dáng Regular Fit, cổ ve lật, ve áo kiểu chữ K, dài tay, cổ tay cài khuy, có 1 túi may viền trước ngực và túi có nắp ở 2 bên hông. Có 1 túi ở lớp vải lót bên trong, xẻ 2 đường ở gấu áo phía sau, cài khuy phía trước. \nChất liệu: \nLớp ngoài: 78% vải pôliexte - 10% len - 8% vải thun vitcô - 4% elastane. \nLớp lót: \nKiểu body: 100% vải pôliexte. \nTay áo: 96% vải pôliexte - 4% elastane.\r\n		', 14, 45, 'blazer_zara_2.jpg', 'New 100%'),
(96, 2, 'Áo khoác Blazer dáng Relaxed Fit, cổ ve lật, ve áo kiểu chữ K, dài tay, cổ tay cài khuy, có túi đáp 2 bên hông. Có 1 túi ở lớp vải lót bên trong, gấu áo xẻ chính giữa phía sau, cài khuy phía trước. \nChất liệu: \nLớp ngoài: 64% vải pôliexte - 32% vải thun vitcô - 4% elastane. \nLớp lót: 95% vải pôliexte - 5% elastane.\r\n		', 15, 45, 'blazer_zara_3.jpg', 'New 100%'),
(97, 2, 'Áo khoác Blazer, cổ ve lật, ve áo kiểu chữ K, dài tay, cổ tay cài khuy, có túi đáp 2 bên hông. Có 1 túi ở lớp vải lót bên trong, gấu áo xẻ chính giữa phía sau, cài khuy phía trước. \nChất liệu: \nLớp ngoài: 66% vải cotton - 34% vải lanh. \nLớp lót: 100% vải pôliexte.\r\n		', 15, 45, 'blazer_zara_4.jpg', 'New 100%'),
(98, 2, 'Áo khoác Blazer, cổ ve lật, ve áo kiểu chữ K, dài tay, cổ tay cài khuy, có túi đáp trước ngực và 2 bên hông. Có 1 túi ở lớp vải lót bên trong, gấu áo xẻ chính giữa phía sau, cài khuy phía trước. \nChất liệu: \nLớp ngoài: 99% vải cotton - 1% elastane. \nLớp lót: \nKiểu body: 100% vải pôliexte. \nTay áo: 94% vải pôliexte - 6% elastane.\r\n		', 15, 45, 'blazer_zara_5.jpg', 'New 100%'),
(99, 2, 'Áo khoác Blazer, cổ ve lật, ve áo kiểu chữ K, dài tay, có túi may viền khác màu 2 bên hông. Có 1 túi ở lớp vải lót bên trong, gấu áo xẻ chính giữa phía sau, cài khuy phía trước. \nChất liệu: \nLớp ngoài: 62% vải pôliexte - 34% vải thun vitcô - 4% elastane. \nLớp lót: 100% vải pôliexte.\r\n		', 16, 45, 'blazer_zara_6.jpg', 'New 100%'),
(100, 2, 'Áo khoác Blazer, cổ ve lật may thừa khuyết, cài khuy ở cổ tay, dài tay, có túi may viền 2 bên hông. Có 1 túi ở lớp vải lót bên trong, gấu áo xẻ chính giữa phía sau, cài khuy phía trước. \nChất liệu: \nLớp ngoài: 56% vải thun vitcô - 37% vải pôliexte - 7% elastane. \nLớp lót: \nKiểu body: 100% vải pôliexte. \nTay áo: 95% vải pôliexte - 5% elastane.\r\n		', 16, 45, 'blazer_zara_7.jpg', 'New 100%'),
(101, 2, 'Áo khoác Blazer, cổ ve lật may thừa khuyết, cài khuy ở cổ tay, dài tay, có túi may viền 2 bên hông. Có 1 túi ở lớp vải lót bên trong, gấu áo xẻ chính giữa phía sau, cài khuy phía trước. \nChất liệu: \nLớp ngoài: 62% vải pôliexte - 32% vải thun vitcô - 4% elastane - 2% polyethylene. \nLớp lót: 100% vải pôliexte.\r\n		', 16, 45, 'blazer_zara_8.jpg', 'New 100%'),
(102, 2, 'Áo khoác Blazer, cổ ve lật may thừa khuyết, cài khuy ở cổ tay, dài tay, có túi may viền 2 bên hông. Có 1 túi ở lớp vải lót bên trong, gấu áo xẻ chính giữa phía sau, cài khuy phía trước. \nChất liệu: \nLớp ngoài: 62% vải pôliexte - 32% vải thun vitcô - 4% elastane - 2% polyethylene. \nLớp lót: 100% vải pôliexte.\r\n		', 16, 45, 'blazer_zara_9.jpg', 'New 100%'),
(103, 2, 'Áo khoác Blazer vải pha sợi Linen, cổ không ve, dài tay. Có túi 2 bên hông. \nChất liệu: \nLớp ngoài: 52% vải lanh - 48% vải cotton. \nLớp lót: 100% vải pôliexte.\r\n		', 16, 45, 'blazer_zara_10.jpg', 'New 100%'),
(104, 2, 'Đang cập nhật', 12, 89, 'thun.jpg', 'Like new 95%');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gia`
--

CREATE TABLE `gia` (
  `idprice` int(11) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `gia`
--

INSERT INTO `gia` (`idprice`, `price`) VALUES
(1, 459000),
(2, 298000),
(3, 319000),
(4, 1299000),
(5, 379000),
(6, 425000),
(7, 300000),
(8, 399000),
(9, 149000),
(10, 799000),
(11, 999000),
(12, 529000),
(13, 1699000),
(14, 2999000),
(15, 2699000),
(16, 2299000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

CREATE TABLE `hoadon` (
  `mahd` int(11) NOT NULL,
  `sdt` int(11) NOT NULL,
  `ngaymua` date NOT NULL,
  `diachigiaohang` varchar(200) NOT NULL,
  `ghichu` text DEFAULT NULL,
  `tongtien` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `hoadon`
--

INSERT INTO `hoadon` (`mahd`, `sdt`, `ngaymua`, `diachigiaohang`, `ghichu`, `tongtien`) VALUES
(200820210, 123456789, '2021-08-28', '331 Quốc Lộ 1, AnPhuDong', '', 758000),
(200820211, 909778899, '2021-08-28', '331 Quốc Lộ 1,An Phú Đồng, Quận 12 TP.HCM', 'Giao gấp !!!', 2436100);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `sdt` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `matkhau` varchar(100) NOT NULL,
  `hoten` varchar(200) NOT NULL,
  `ngaysinh` date DEFAULT NULL,
  `gioitinh` varchar(20) NOT NULL,
  `diachi` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
--

INSERT INTO `khachhang` (`sdt`, `email`, `matkhau`, `hoten`, `ngaysinh`, `gioitinh`, `diachi`) VALUES
(111222333, 'dalecarnegie@yahoo.com', '123123', 'Dale Carnegie', '1989-01-15', 'Nam', '11H Nguyễn Thị Minh Khai, Q1, TPHCM'),
(123456789, 'nguyenthithu@gmail.com', '123456', 'Nguyễn Thị Thu', '1998-03-11', 'Nữ', 'Q5, TPHCM'),
(147258369, 'nguyenducmanh@gmail.com', '111111', 'Nguyễn Đức Mạnh', '1999-05-20', 'Nam', 'Q3, TPHCM'),
(234569872, 'vantien1004@gmail.com', '555555', 'Đặng Văn Tiến', '1995-04-10', 'Nam', 'Q1, TPHCM'),
(909778899, 'kienthan99@gmai.com', 'kien1234', 'Than Dang Kien', '2000-06-15', 'Nam', '331 Quốc Lộ 1,An Phú Đồng, Quận 12 TP.HCM');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `mathang`
--

CREATE TABLE `mathang` (
  `mamh` int(11) NOT NULL,
  `tenmh` varchar(200) NOT NULL,
  `idphanloai` int(11) NOT NULL,
  `idsale` int(11) NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `mathang`
--

INSERT INTO `mathang` (`mamh`, `tenmh`, `idphanloai`, `idsale`, `url`) VALUES
(1, 'Skinny Jeans', 5, 3, 'skinny-jeans'),
(2, 'Slim Jeans', 5, 1, 'slim-jeans'),
(3, 'Raw-edge T-shirt', 4, 1, 'raw-edge-t-shirt'),
(4, 'Quần short Bermuda', 7, 2, 'quan-short-bermuda'),
(5, 'Áo sơ mi Oxford kẻ', 2, 4, 'ao-so-mi-oxford-ke'),
(6, 'Áo sơ mi kẻ sọc phối vải', 2, 1, 'ao-so-mi-ke-soc-phoi-vai'),
(7, 'Áo thun đen in hình S.Oversize', 1, 3, 'ao-thun-den-in-hinh-s-oversize-1'),
(8, 'Áo thun đen in hình S.Oversize', 1, 3, 'ao-thun-den-in-hinh-s-oversize-2'),
(9, 'Quần kaki xanh đen', 6, 3, 'quan-kaki-xanh-den'),
(10, 'MI-BB-Q101 No Smoking', 1, 2, 'mi-bb-q101-no-smoking'),
(11, 'MI-BB-Q101 Logo Chill Pastel', 1, 2, 'mi-bb-q101-logo-chill-pastel'),
(12, 'MI-BB-Q101 Big Icon Plant', 1, 4, 'mi-bb-q101-big-icon-plant'),
(13, 'MI-BB-Q101 Big Icon Water', 1, 3, 'mi-bb-q101-big-icon-water'),
(14, 'Áo Polo in họa tiết - Fitted Form - 10S21POL009', 3, 3, 'ao-polo-in-hoa-tiet-fitted-form-10S21POL009'),
(15, 'Áo Polo vải gân - Loose Form - 10S21POL013', 3, 3, 'ao-polo-vai-gan-loose-form-10S21POL013'),
(16, 'Áo Polo có viền nẹp trụ - Fitted Form - 10S21POL007', 3, 3, 'ao-polo-co-vien-nep-tru'),
(17, 'Áo sơ mi trơn có túi màu xanh SM057', 2, 3, 'ao-so-mi-co-tui-mau-xanh-SM057'),
(18, 'Áo sơ mi trơn ASM046 màu trắng kem', 2, 1, 'ao-so-mi-tron-ASM046-mau-trang-kem'),
(19, 'Áo sơ mi Caro ASM044 màu nâu', 2, 1, 'ao-so-mi-caro-ASM044-mau-nau'),
(20, 'Áo sơ mi Modal đốm ASM045 màu đen', 2, 1, 'ao-so-mi-modal-dom-ASM045-mau-den'),
(21, 'Áo Thun Cổ Tròn Tay Lỡ', 1, 2, 'ao-thun-co-tron-tay-lo'),
(22, 'Áo thun DRY cổ V ngắn tay', 1, 3, 'ao-thun-dry-co-v-ngan-tay'),
(23, 'Áo thun DRY cổ thuyền', 1, 1, 'ao-thun-dry-co-thuyen'),
(24, 'Áo Thun Dáng Rộng Cổ Tròn Ngắn Tay', 1, 1, 'ao-thun-dang-rong-co-tron-ngan-tay'),
(25, 'Áo Sơ Mi Vải Sọc Nhăn Kẻ Caro Ngắn Tay', 2, 3, 'ao-so-mi-vai-soc-nhan-ke-caro-ngan-tay'),
(26, 'Áo Sơ Mi Dài Tay Extra Fine Cotton', 2, 1, 'ao-so-mi-dai-tay-extra-fine-cotton'),
(27, 'Áo Sơ Mi kẻ sọc thêu họa tiết', 2, 1, 'ao-so-mi-ke-soc-theu-hoa-tiet'),
(28, 'Áo Sơ Mi vải dệt cotton', 2, 3, 'ao-so-mi-vai-det-cotton'),
(29, 'Áo Polo vải Lyocell', 3, 1, 'ao-polo-vai-lyocell'),
(30, 'Áo Polo kẻ ngang đáp logo SMILEY', 3, 1, 'ao-polo-ke-ngang-dap-logo-smiley'),
(31, 'Áo Polo vải Linen', 3, 4, 'ao-polo-vai-linen'),
(32, 'Áo Polo vải Lyocell dệt kim', 3, 3, 'ao-polo-vai-lyocell-det-kim'),
(33, 'Áo Polo vải cotton mềm', 3, 3, 'ao-polo-vai-cotton-mem'),
(34, 'Knit Polo Shirt', 3, 1, 'knit-polo-shirt'),
(35, 'Áo Polo dệt kim họa tiết kẻ ngang', 3, 1, 'ao-polo-det-kim-hoa-tiet-ke-ngang'),
(36, 'Áo Polo kiểu đan lưới', 3, 1, 'ao-polo-kieu-dan-luoi'),
(37, 'Áo Polo họa tiết hình học', 3, 1, 'ao-polo-hoa-tiet-hinh-hoc'),
(38, 'Áo Polo kẻ ngang', 3, 1, 'ao-polo-ke-ngang'),
(39, 'Áo Polo vải bóng nhẹ', 3, 1, 'ao-polo-vai-bong-nhe'),
(40, 'Áo Polo dệt kim', 3, 1, 'ao-polo-det-kim'),
(41, 'Áo thun họa tiết SMILEY', 4, 1, 'ao-thun-hoa-tiet-smiley'),
(42, 'Áo thun họa tiết SMILEY', 4, 2, 'ao-thun-hoa-tiet-smiley-1'),
(43, 'Áo thun họa tiết SMILEY', 4, 3, 'ao-thun-hoa-tiet-smiley-2'),
(44, 'Áo thun cơ bản dáng Slim Fit', 4, 4, 'ao-thun-co-ban-dang-slim-fit'),
(45, 'Áo thun dệt kim in họa tiết chữ', 4, 2, 'ao-thun-det-kim-in-hoa-tiet-chu'),
(46, 'Áo thun in họa tiết phối vải', 4, 2, 'ao-thun-in-hoa-tiet-phoi-vai'),
(47, 'Áo thun họa tiết hình học', 4, 3, 'ao-thun-hoa-tiet-hinh-hoc'),
(48, 'Áo thun vải Otto Man', 4, 2, 'ao-thun-vai-otto-man'),
(49, 'Áo thun vải vải dập li có túi ngực', 4, 1, 'ao-thun-vai-dap-li-co-tui-nguc'),
(50, 'Áo thun có túi (Premium)', 4, 3, 'ao-thun-co-tui-premium'),
(51, 'Áo thun kiểu cơ bản Heavy Weight', 4, 3, 'ao-thun-kieu-co-ban-heavy-weight'),
(52, 'Áo thun dệt kim có họa tiết', 4, 3, 'ao-thun-det-kim-co-hoa-tiet'),
(53, 'Áo thun dệt kim họa tiết trừu tượng', 4, 2, 'ao-thun-det-kim-hoa-tiet-truu-tuong'),
(54, 'Áo thun kiểu cơ bản Medium Weight', 4, 2, 'ao-thun-kieu-co-ban-medium-weight'),
(55, 'Quần Jeans ống bó kiểu cơ bản', 5, 2, 'quan-jeans-ong-bo-kieu-co-ban'),
(56, 'Quần Jeans dáng Skinny Fit', 5, 1, 'quan-jeans-dang-skinny-fit'),
(57, 'Quần Jeans Cargo có khóa kéo', 5, 1, 'quan-jeans-cargo-co-khoa-keo'),
(58, 'Quần Jeans dáng Tapered Fit', 5, 5, 'quan-jeans-dang-tapered-fit'),
(59, 'Quần Jeans rách dáng Skinny Fit', 5, 4, 'quan-jeans-rach-dang-skinny-fit'),
(60, 'Quần Jeans rách ống bó', 5, 1, 'quan-jeans-rach-ong-bo'),
(61, 'Quần Jeans Bleach trang trí các chi tiết rách', 5, 3, 'quan-jeans-bleach-trang-tri-cac-chi-tiet-rach'),
(62, 'Quần Jeans rách kiểu Patch Work', 5, 2, 'quan-jeans-rach-kieu-patch-work'),
(63, 'Quần Jeans Slim Fit ống cắt cúp', 5, 4, 'quan-jeans-slim-fit-ong-cat-cup'),
(64, 'Jeans The 90S Slim Fit', 5, 3, 'jeans-the-90s-slim-fit'),
(65, 'Quần Jeans dáng Straight Fit', 5, 2, 'quan-jeans-dang-straight-fit'),
(66, 'Quần Jeans ống bó cắt cúp', 5, 2, 'quan-jeans-ong-bo-cat-cup'),
(67, 'Quần Jeans Cargo có các đường may nối', 5, 1, 'quan-jeans-cargo-co-cac-duong-may-noi'),
(68, 'Quần kaki kem thêu', 6, 1, 'quan-kaki-kem-theu'),
(69, 'Quần kaki xám thêu', 6, 2, 'quan-kaki-xam-theu'),
(70, 'Quần kaki be', 6, 2, 'quan-kaki-be'),
(71, 'Quần kaki xám', 6, 2, 'quan-kaki-xam'),
(72, 'Quần kaki xanh đen', 6, 2, 'quan-kaki-xanh-den'),
(73, 'Quần kaki kem', 6, 2, 'quan-kaki-kem'),
(74, 'Quần kaki đen', 6, 2, 'quan-kaki-den'),
(75, 'Quần kaki xám nhạt', 6, 2, 'quan-kaki-xam-nhat'),
(76, 'Quần kaki vải đơn giản C04', 6, 2, 'quan-kaki-vai-don-gian-C04'),
(77, 'Quần kaki vải đơn giản B01', 6, 1, 'quan-kaki-vai-don-gian-B01'),
(78, 'Quần kaki vải đặc biệt C03', 6, 4, 'quan-kaki-vai-dac-biet-C03'),
(79, 'Quần kaki vải đặc biệt E03', 6, 1, 'quan-kaki-vai-dac-biet-E03'),
(80, 'Quần kaki vải đặc biệt C02', 6, 1, 'quan-kaki-vai-dac-biet-C02'),
(81, 'Quần kaki vải đặc biệt B2H01', 6, 3, 'quan-kaki-vai-don-gian-B2H01'),
(82, 'Quần short Bermuda kiểu Jogger xếp li', 7, 3, 'quan-short-Bermuda-kieu-Jogger-xep-li'),
(83, 'Quần short Bermuda dáng Jogger vải bạc màu', 7, 1, 'quan-short-Bermuda-dang-Jogger-vai-bac-mau'),
(84, 'Quần short in chữ khác màu', 7, 2, 'quan-short-in-chu-khac-mau'),
(85, 'Quần short Denim rách họa tiết vẩy sơn', 7, 2, 'quan-short-Denim-rach-hoa-tiet-vay-son'),
(86, 'Quần short Bermuda Denim Skate Fit', 7, 2, 'quan-short-Bermuda-Denim-Skate-Fit'),
(87, 'Quần short Bermuda vải cotton', 7, 2, 'quan-short-Bermuda-vai-cotton'),
(88, 'Quần short họa tiết hoa', 7, 2, 'quan-short-hoa-tiet-hoa'),
(89, 'Quần short hiệu ứng vải nhăn', 7, 1, 'quan-short-hieu-ung-vai-nhan'),
(90, 'Quần short ống rộng', 7, 1, 'quan-short-ong-rong'),
(91, 'Quần short Bermuda vải cotton dáng Relaxed Fit', 7, 1, 'quan-short-Bermuda-vai-cotton-dang-Relaxed-Fit'),
(92, 'Quần short cạp khác màu', 7, 2, 'quan-short-cap-khac-mau'),
(93, 'Quần short Denim mềm', 7, 1, 'quan-short-Denim-mem'),
(94, 'Áo khoác Blazer theo bộ có vạt đắp chéo', 8, 1, 'ao-khoac-Blazer-theo-bo-co-vat-dap-cheo'),
(95, 'Áo khoác Blazer vải dệt theo bộ', 8, 1, 'ao-khoac-Blazer-vai-det-theo-bo'),
(96, 'Áo khoác Blazer theo bộ dáng Relaxed Fit', 8, 2, 'ao-khoac-Blazer-theo-bo-dang-Relaxed-Fit'),
(97, 'Áo khoác Blazer vải dệt họa tiết kẻ caro', 8, 2, 'ao-khoac-Blazer-vai-det-hoa-tiet-ke-caro'),
(98, 'Áo khoác Blazer vải dệt', 8, 2, 'ao-khoac-Blazer-vai-det'),
(99, 'Bộ vest Blazer cách điệu', 8, 2, 'bo-vest-Blazer-cach-dieu'),
(100, 'Áo khoác Blazer dáng Slim', 8, 1, 'ao-khoac-Blazer-dang-Slim'),
(101, 'Áo khoác Blazer vải Melange', 8, 1, 'ao-khoac-Blazer-vai-Melange'),
(102, 'Áo khoác Blazer Suit Tuxedo', 8, 1, 'ao-khoac-Blazer-Suit-Tuxedo'),
(103, 'Áo khoác Blazer vải pha sợi Linen', 8, 1, 'ao-khoac-Blazer-vai-pha-soi-Linen'),
(104, 'Thử nghiệm lần 35', 4, 3, 'Thử-nghiệm-lần-35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phanloai`
--

CREATE TABLE `phanloai` (
  `idphanloai` int(11) NOT NULL,
  `phanloai` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `phanloai`
--

INSERT INTO `phanloai` (`idphanloai`, `phanloai`) VALUES
(1, 'Áo thun'),
(2, 'Áo sơ mi'),
(3, 'Áo Polo'),
(4, 'T-Shirt'),
(5, 'Quần Jean'),
(6, 'Quần Kaki'),
(7, 'Quần short'),
(8, 'Áo blazer');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sale`
--

CREATE TABLE `sale` (
  `idsale` int(11) NOT NULL,
  `saleoff` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `sale`
--

INSERT INTO `sale` (`idsale`, `saleoff`) VALUES
(1, 0),
(2, 0.1),
(3, 0.15),
(4, 0.2),
(5, 0.25),
(6, 0.3),
(7, 0.35),
(8, 0.4),
(9, 0.45),
(10, 0.5);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`);

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`idbrand`);

--
-- Chỉ mục cho bảng `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD PRIMARY KEY (`mahd`,`mamh`),
  ADD KEY `mamh` (`mamh`);

--
-- Chỉ mục cho bảng `chitietmathang`
--
ALTER TABLE `chitietmathang`
  ADD PRIMARY KEY (`mactmh`),
  ADD KEY `idbrand` (`idbrand`),
  ADD KEY `idgia` (`idgia`);

--
-- Chỉ mục cho bảng `gia`
--
ALTER TABLE `gia`
  ADD PRIMARY KEY (`idprice`);

--
-- Chỉ mục cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`mahd`),
  ADD KEY `sdt` (`sdt`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`sdt`);

--
-- Chỉ mục cho bảng `mathang`
--
ALTER TABLE `mathang`
  ADD PRIMARY KEY (`mamh`),
  ADD KEY `idphanloai` (`idphanloai`),
  ADD KEY `idsale` (`idsale`);

--
-- Chỉ mục cho bảng `phanloai`
--
ALTER TABLE `phanloai`
  ADD PRIMARY KEY (`idphanloai`);

--
-- Chỉ mục cho bảng `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`idsale`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `brand`
--
ALTER TABLE `brand`
  MODIFY `idbrand` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `gia`
--
ALTER TABLE `gia`
  MODIFY `idprice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `mahd` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200820212;

--
-- AUTO_INCREMENT cho bảng `mathang`
--
ALTER TABLE `mathang`
  MODIFY `mamh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT cho bảng `phanloai`
--
ALTER TABLE `phanloai`
  MODIFY `idphanloai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `sale`
--
ALTER TABLE `sale`
  MODIFY `idsale` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chitiethoadon`
--
ALTER TABLE `chitiethoadon`
  ADD CONSTRAINT `chitiethoadon_ibfk_1` FOREIGN KEY (`mahd`) REFERENCES `hoadon` (`mahd`),
  ADD CONSTRAINT `chitiethoadon_ibfk_2` FOREIGN KEY (`mamh`) REFERENCES `mathang` (`mamh`);

--
-- Các ràng buộc cho bảng `chitietmathang`
--
ALTER TABLE `chitietmathang`
  ADD CONSTRAINT `chitietmathang_ibfk_1` FOREIGN KEY (`mactmh`) REFERENCES `mathang` (`mamh`),
  ADD CONSTRAINT `chitietmathang_ibfk_2` FOREIGN KEY (`idbrand`) REFERENCES `brand` (`idbrand`),
  ADD CONSTRAINT `chitietmathang_ibfk_3` FOREIGN KEY (`idgia`) REFERENCES `gia` (`idprice`);

--
-- Các ràng buộc cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `hoadon_ibfk_1` FOREIGN KEY (`sdt`) REFERENCES `khachhang` (`sdt`);

--
-- Các ràng buộc cho bảng `mathang`
--
ALTER TABLE `mathang`
  ADD CONSTRAINT `mathang_ibfk_1` FOREIGN KEY (`idphanloai`) REFERENCES `phanloai` (`idphanloai`),
  ADD CONSTRAINT `mathang_ibfk_2` FOREIGN KEY (`idsale`) REFERENCES `sale` (`idsale`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
