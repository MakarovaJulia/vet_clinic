import React from "react";
import {observer} from "mobx-react";
import {Button} from "../../components/ui/Button";
import {Input} from "../../components/ui/Input";
import {BaseLayout} from "../../components/BaseLayout";

export const MainPage = observer(() => {
    return(
        <BaseLayout>
            <div>
                Главная страница
            </div>
        </BaseLayout>
    )
})