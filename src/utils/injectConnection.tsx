import { useEagerConnect, useInactiveListener } from '../hooks/connect-hook';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { setState } from '../redux/triedEager';

const injectedConnector = () => {
    const triedEager = useAppSelector((state) => state.triedEager.tried);
    const dispatch = useAppDispatch();

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    dispatch(setState(useEagerConnect()));

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager);
};

export default injectedConnector;
