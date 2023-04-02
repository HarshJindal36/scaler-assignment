import { useEffect, useState } from "react";
import { Button, Input, NativeSelect, Modal, Group } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import { IconEdit } from "@tabler/icons-react";
import dijkstra from "../graph";
// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'andrew60@ethereal.email',
//         pass: 'gVSxa9zwt5VXHTUNc3'
//     }
// });


export default function CabBook({ id, defaultRate, pathPerCab, setPathPerCab, timePath, setTimePath }) {
    const [fromVals, setFromVals] = useState(["A", "B", "C", "D", "E", "F"]);
    const [toVals, setToVals] = useState(["A", "B", "C", "D", "E", "F"]);
    const [selectedFrom, setSelectedFrom] = useState("x");
    const [selectedTo, setSelectedTo] = useState("x");
    const [modalWindow, setModalWindow] = useState("");
    const [showDestination, setShowDestination] = useState(false);
    const [enableBook, setEnableBook] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);
    const [rate, setRate] = useState(defaultRate);
    const [email, setEmail] = useState("");
    const [calculatedRoute, setCalculatedRoute] = useState();
    const [bookText, setBookText] = useState("Book Cab");

    function openModal(CMD) {
        setModalWindow(CMD);
        if (CMD === "EDIT") { }
        if (CMD === "BOOK") {
            if (selectedFrom === "x" || selectedTo === "x") return;
        }
        open();
    }

    function onSourceChange(e) {
        setShowDestination(true);
        setToVals(fromVals.filter((val) => val !== e.target.value));
        console.log(e.target.value);
        setSelectedFrom(e.target.value);
    }

    function onDestinationChange(e) {
        console.log(e.target.value);
        setSelectedTo(e.target.value);
        setEnableBook(true);
    }

    useEffect(() => {
        if (selectedFrom === "x" || selectedTo === "x") return
        const d = calcRoute();
    }, [selectedFrom, selectedTo]);

    function calcRoute() {
        const dijk = dijkstra(selectedFrom, selectedTo, Object.values(pathPerCab));
        if (dijk.distance === Infinity) {
            setEnableBook(false);
            setBookText("No route found");
            return [-1, []];
        } else {
            setPathPerCab({ ...pathPerCab, [id]: dijk.path });
            setCalculatedRoute([dijk.distance, dijk.path]);
            setEnableBook(true);
            setBookText("Book Cab");
            return [dijk.distance, dijk.path];
        }
    }

    // function confirm() {
    //     transporter.sendMail({
    //         from: '"Andrew Schultz" <andrew60@ethereal.email>', // sender address
    //         to: email, // list of receivers
    //         subject: "Cab Booked", // Subject line
    //         // text: "Your cab has been successfully booked", // plain text body
    //         html: `Your cab has been successfully booked<br/>Path : ${calculatedRoute[1].join(" -> ")}<br/> Estimated Price : ${parseInt(calculatedRoute[0]) * rate}`, // html body
    //     }).then((info) => {
    //         console.log(info);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

    useEffect(() => {

    }, [email]);

    return <div>
        <Modal id="a" opened={opened} onClose={close} title="Estimated Cost" centered>
            {modalWindow === "BOOK" ?
                <>
                    Time taken : {calculatedRoute[0]} minutes<br />
                    Estimated Cost : {parseInt(calculatedRoute[0]) * rate} Rs<br />
                    Path taken : {calculatedRoute[1].join(" -> ")}<br />
                    <Button onClick={confirm} color="green" variant="outline">Confirm Booking</Button>
                </> :
                <>
                    <Input.Wrapper label="Rate per minute">
                        <Input placeholder="10Rs" type="number" defaultValue={rate} onChange={(e) => setRate(parseInt(e.target.value))} />
                    </Input.Wrapper>
                </>
            }
        </Modal>

        <div className="w-[90vw] flex flex-col sm:flex-row justify-between gap-5 bg-blue-50 rounded-md px-5 py-2 mt-3">
            <div className="flex gap-5 flex-col sm:flex-row">
                <div className="flex gap-5">
                    <NativeSelect className="w-full"
                        label="From" placeholder="Select source" data={[{
                            label: "Select Source",
                            value: "x", disabled: true
                        }, ...fromVals]} defaultValue="x" onChange={onSourceChange} />
                    <NativeSelect className="w-full"
                        label="To" placeholder="Select destination" data={[{
                            label: "Select Destination",
                            value: "x", disabled: true
                        }, ...toVals]} defaultValue="x" disabled={!showDestination} onChange={onDestinationChange} />
                </div>
                <Input.Wrapper label="Email Address" className="sm:w-[200px]">
                    <Input placeholder="melon.musk@gmail.com" type="email" onChange={setEmail} />
                </Input.Wrapper>
            </div>
            <div className="flex my-6 gap-3 mx-auto sm:mx-0">
                <Button.Group>
                    <Button variant="outline" color="red" onClick={() => openModal("EDIT")}><IconEdit color="red" /></Button>
                    <Button variant="outline" color="green" onClick={() => openModal("BOOK")} disabled={!enableBook}>{bookText}</Button>
                </Button.Group>
            </div>
        </div>
    </div>
}