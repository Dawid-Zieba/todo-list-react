import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Box } from "../Buttons/styled";
import { Button } from "../../Button/styled";

const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Box>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading ? "Trwa ładowanie" : "Pobierz przykładowe zadania"}
            </Button>
        </Box>
    );
};

export default FetchExampleTasksButton;