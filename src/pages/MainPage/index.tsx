import React from "react";
import {observer} from "mobx-react";
import {Button} from "../../components/ui/Button";

export const MainPage = observer(() => {
    return(
        <>
            <div>
                Главная страница
                <Button disabled={false}>Зарегистрироваться</Button>
            </div>
        </>
    )
})