import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card.js";
import Dropdown from "../Dropdown/Dropdown.js";
import Editable from "../Editabled/Editable.js";

import "./Board.css";

function Board(props) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="board">
            <div className="board_header">
                {/*<p className="board_header_title">*/}
                {/*    {props.board?.title}*/}
                {/*</p>*/}
                {props.children}
            </div>
            <div className="board_cards custom-scroll">
                {props.board?.cards?.map((item) => (
                    <Card
                        key={item.id}
                        card={item}
                        boardId={props.board.id}
                        removeCard={props.removeCard}
                        // dragEntered={props.dragEntered}
                        // dragEnded={props.dragEnded}
                        updateCard={props.updateCard}
                    />
                ))}
                <Editable
                    text="+ Add Task"
                    placeholder="Enter Card Title"
                    displayClass="board_add-card"
                    editClass="board_add-card_edit"
                    onSubmit={(value) => props.addCard(props.board?.id, value)}
                />
            </div>
        </div>
    );
}

export default Board;
