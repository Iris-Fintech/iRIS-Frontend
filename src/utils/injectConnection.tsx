import useEagerConnect from '../hooks/useEagerConnect';
import useInactiveListener from '../hooks/useInactiveListener';
import { useAppSelector } from '../redux/hook';

const injectedConnector = () => {
    const triedEager = useAppSelector((state) => state.triedEager.tried);

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    useEagerConnect();

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager);
};

export default injectedConnector;
