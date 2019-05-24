pragma solidity ^0.5.0;

contract EtherFish {
    
    address public admin;
    
    uint public lastFeed;
    
    constructor () public {
        admin = msg.sender;
        lastFeed = now;
    }
    
    modifier auth {
        require(msg.sender == admin, "Prohibited");
        _;
    }
    
    event Fed(address feeder);
    
    function feedFish() public payable {
        require(msg.value >= 0.0001 ether, "Cost: 0.0001 ether");
        require(lastFeed < now, "Wait 1 minute");
        lastFeed = now+60;
        emit Fed(msg.sender);
    }
    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
    
    function withdraw(address payable _to, uint _amount) public auth {
        _to.transfer(_amount);
    }
    
}
