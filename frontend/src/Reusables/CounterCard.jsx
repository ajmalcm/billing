import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const CounterCard = ({ counterNo }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhno: "",
  });
  const { customerName, customerEmail, customerPhno } = registerData;

  const changeHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!customerName || !customerEmail || !customerPhno) {
      toast.error("enter customers details properly");
    } else navigate(`/counter/${counterNo}`);
  };
  return (
    <>
      <div
        className="h-fit w-fit odd:bg-purple-500 even:bg-purple-700 flex flex-col gap-6 px-3 py-3 text-white m-2 font-mono cursor-pointer"
        onClick={handleOpen}
      >
        <h2 className="text-2xl font-bold">Counter {counterNo}</h2>
        <div className="flex justify-start items-center">
          <p className="font-light tracking-wide text-sm">STATUS</p>
          <TrendingFlatRoundedIcon fontSize="large" />
          <p className="font-extralight tracking-wider text-sm">available</p>
        </div>
      </div>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={style}
          className="flex flex-col items-center justify-center font-mono gap-3 w-[30%]   px-12 py-10 shadow-2xl text-white"
        >
            <h2 className="text-center font-mono text-black text-2xl font-bold tracking-widest">
             COUNTER-{counterNo}
            </h2>
          <div className="flex items-center gap-3 px-4 py-2 bg-purple-700 w-full">
            <div className="flex-[0.25]">
              <PersonIcon />
            </div>
            <input
              placeholder="Customer-Name"
              type="text"
              className="flex-0.75 outline-none border-none rounded-md bg-purple-700"
              name="customerName"
              value={customerName}
              onChange={changeHandler}
            />
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-purple-700 w-full">
            <div className="flex-[0.25]">
              <PersonIcon />
            </div>
            <input
              placeholder="Phone-No"
              type="text"
              className="flex-0.75 outline-none border-none rounded-md bg-purple-700"
              name="customerPhno"
              value={customerPhno}
              onChange={changeHandler}
            />
          </div>
          <div className="flex  items-center gap-3 px-4 py-2 bg-purple-700 w-full">
            <div className="flex-[0.25]">
              <EmailIcon />
            </div>
            <input
              placeholder="Customer-email"
              type="email"
              className="flex-0.75 outline-none border-none rounded-md bg-purple-700"
              name="customerEmail"
              value={customerEmail}
              onChange={changeHandler}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-xl w-3/4 text-white bg-blue-600 rounded-sm tracking-wider font-light"
            onClick={submitHandler}
          >
            SUBMIT
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default CounterCard;
