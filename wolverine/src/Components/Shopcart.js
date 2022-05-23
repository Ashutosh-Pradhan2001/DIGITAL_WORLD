import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Shopcart.css";
const Shopcart = () => {
  const params = useParams();
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const { product } = params;
  console.log(product);
  useEffect(() => {
    if (product == "lenovo1") {
      setImg(
        "https://images-eu.ssl-images-amazon.com/images/I/41NvMZxjbKL._SX300_SY300_QL70_FMwebp_.jpg"
      );
      setName(`Lenovo IdeaPad 3 11th Gen Intel Core i3 35.56cm (14
        inches) FHD Thin & Light Laptop (8 GB/256GB
        SDD/Windows 11/MS Office 2021/2Yr Warranty/Platinum
        Grey/1.5Kg), 81X700CWIN`);
      setPrice(36900);
    }
    if (product == "lenovo2") {
      setImg("https://m.media-amazon.com/images/I/51+yclVBCRL._SX569_.jpg");
      setName(`Lenovo ThinkPad E14 Intel Core i5 11th Gen 14-inch
      (35.56cm) FHD IPS Antiglare Thin and Light Laptop
      (16GB RAM/512GB SSD/Windows 11 Home/Microsoft Office
      H&S 2021/FPR/Black/1.59 kg), 20TAS13N00`);
      setPrice(73980);
    }
    if (product == "lenovo3") {
      setImg("https://m.media-amazon.com/images/I/51jLW8T47US._SX569_.jpg");
      setName(`Lenovo V15-ADA AMD Ryzen 3 3250U 15.6 inches HD
      Business Laptop (4GB/1TB/Windows 10/Iron Grey),
      82C700H3IH, 1.85kg`);
      setPrice(34590);
      console.log("adasd");
    }
    if (product == "lenovo4") {
      setImg(
        "https://images-eu.ssl-images-amazon.com/images/I/5174QzS5xDL._SX300_SY300_QL70_FMwebp_.jpg"
      );
      setName(` Lenovo Legion 5 AMD Ryzen 5 4600H 15.6 inch (39.62 cms)
        Full HD Gaming Laptop (8GB/1TB HDD + 256GB SSD/Windows 10/120 Hz/NVIDIA
        GTX 1650 4GB GDDR6/Phantom Black/2.3Kg), 82B500BHIN`);
      setPrice(60990);
    }

    if (product == "HP1") {
      setImg("https://m.media-amazon.com/images/I/81Ln6w1hqtL._SX569_.jpg");
      setName(`  HP 15s 11th Gen Intel Core i3 15.6 inches Laptop (8GB
        RAM/512GB SSD , HD,Anti-Glare Display/UHD
        Graphics/Windows 11 Home/Alexa-Built in/MS
        Office/Natural Silver/1.75 Kg,-15s-dy3501TU)`);
      setPrice(41990);
    }
    if (product == "HP2") {
      setImg("https://m.media-amazon.com/images/I/81kf96c9T+L._SX569_.jpg");
      setName(` HP Pavilion 15 11th Gen Intel Core i5-8GB RAM/512GB
      SSD 15.6 inch(39.6 cm)Laptop, FHD Anti-Glare Display/
      Intel Iris Xe Graphics/Backlit KB/B&O Audio/Windows
      11/ 1.75kg, 15-eg1000TU`);
      setPrice(61250);
    }
    if (product == "HP3") {
      setImg("https://m.media-amazon.com/images/I/712lajO8VaL._SX450_.jpg");
      setName(`  HP 14(2021) 5th Gen AMD Ryzen 3 5300U 14 inches FHD
      Gaming Laptop with Alexa Built-in (8GB/512GB
      SSD/Windows 10/MS Office), Natural Silver, 1.46Kg,
      14s-fq1029AU`);
      setPrice(41700);
    }
    if (product == "HP4") {
      setImg("https://m.media-amazon.com/images/I/51DmOWr3rnL._SX466_.jpg");
      setName(`   HP Pavilion Gaming Latest AMD Ryzen 5 5600H Processor
      15.6 inch(39.6 cm) FHD Gaming Laptop (8GB/512GB
      SSD/Win 11 Home/NVIDIA GeForce GTX 1650 4GB
      Graphics/B&O/Backlit KB/MSO/1.98 Kg), 15-ec2150AX`);
      setPrice(58990);
    }
    if (product == "Acer1") {
      setImg("https://m.media-amazon.com/images/I/71XrhZlgYML._SX425_.jpg");
      setName(` Acer Aspire 3 Intel 11th Generation Core i3 Laptop
      15.6-inch (39.6 cms) Full HD (1920x1080) Anti-Glare
      Display - (8 GB/512 GB SSD/Windows 11 Home/MS
      Office/1.7 Kg/Silver) A315-58`);
      setPrice(41800);
    }
    if (product == "Acer2") {
      setImg("https://m.media-amazon.com/images/I/71D3y82w27L._SX679_.jpg");
      setName(`   Acer Aspire 5 11th Gen Core i5 14-inch (35.56 cms)
      Full HD IPS Thin & Light Laptop- (8 GB/256GB SSD/1TB
      HDD/Windows 10 Home/Intel Iris Xe Graphics/Pure
      Silver/1.55 Kg), A514-54`);
      setPrice(41800);
    }
    if (product == "Acer3") {
      setImg("https://m.media-amazon.com/images/I/61TWFbueNiL._SX425_.jpg");
      setName(`Acer Aspire 3 AMD Ryzen 3 3250U Processor 15.6" (39.6
        cms) Full HD Laptop - (8 GB/512 GB SSD/Windows 11
        Home/AMD Radeon Graphics /1.9Kg/Silver) A315-23`);
      setPrice(35990);
    }
    if (product == "Acer4") {
      setImg("https://m.media-amazon.com/images/I/71xUZ1ZxgQS._SX450_.jpg");
      setName(`Acer Nitro 5 Gaming Laptop AMD Ryzen 5-5600H- (8GB/
      1TB HDD/256GB SSD/NVIDIA GeForce RTX 3050/ Windows 10
      Home/144Hz)| AN515-45`);
      setPrice(87500);
    }
    if (product == "ASUS1") {
      setImg("https://m.media-amazon.com/images/I/71WuDXpTAlL._SY450_.jpg");
      setName(` ASUS VivoBook 14 (2021), Intel Core i3-1115G4 11th
      Gen, 14-inch (35.56 cms) FHD Thin and Light Laptop
      (8GB/256GB SSD/Office 2021/Windows 11/Integrated
      Graphics/Silver/1.6 Kg), X415EA-EK342WS`);
      setPrice(34979);
    }
    if (product == "ASUS2") {
      setImg("https://m.media-amazon.com/images/I/91aWfctUptL._SX569_.jpg");
      setName(` ASUS TUF Gaming F15 (2021) 15.6-inch (39.62 cms) FHD
      144Hz, Intel Core i5-11400H 11th Gen, RTX 3050 Ti 4GB
      Graphics, Gaming Laptop (16GB/512GB SSD/Windows
      10/Gray/2.3 Kg), FX566HEB-HN249T`);
      setPrice(77990);
    }
    if (product == "ASUS3") {
      setImg("https://m.media-amazon.com/images/I/61TWFbueNiL._SX425_.jpg");
      setName(`Acer Aspire 3 AMD Ryzen 3 3250U Processor 15.6" (39.6
        cms) Full HD Laptop - (4 GB/512 GB SSD/Windows 11
        Home/AMD Radeon Graphics /1.9Kg/Silver) A315-23`);
      setPrice(33999);
    }
    if (product == "ASUS4") {
      setImg("https://m.media-amazon.com/images/I/41VujVrDFYL.jpg");
      setName(`   ASUS ROG Strix G15 AMD Ryzen 5 Hexa Core 5600H 15.6
      inches Gaming Laptop (16 GB/512 GB SSD/Windows 10
      Home/4 GB Graphics/NVIDIA GeForce RTX 3050 Ti/144 Hz)
      G513QE-HN115T (Eclipse Gray, 2.1 KG)`);
      setPrice(96890);
    }
  }, []);
  console.log(price);
  const buySubmit = (e) => {
    e.preventDefault();
    let options = {
      key: "rzp_test_D4VC8dA3CoWgyQ",
      key_secret: "H32C8eLQY8zf7St2g66g7Mg5",
      amount: price * 100,
      currency: "INR",
      name: "E-Commerce",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Ashutosh pradhan",
        email: "ashutoshpradhan2001@gmail.com",
        contact: "7683897583",
      },
      notes: {
        address: "Razorpay office",
      },
    };
    let pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="adkjasscasc">
      <div className="shopcart">
        <div className="shop_con">
          {img.length > 0 && <img src={img} style={{ height: "7rem" }} />}
        </div>
        {name.length > 0 && <div className="shop_con1">{name}</div>}
        {price > 0 && <div className="shop_con1">{price}</div>}
        <div className="shop_con2">
          {" "}
          <button onClick={buySubmit}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Shopcart;
