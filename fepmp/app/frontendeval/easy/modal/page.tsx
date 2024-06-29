"use client";
import { useState } from "react";
import Modal from "@/app/_ui/Modal/Modal";
import Button from "@/app/_ui/Button/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        확인
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>확인 부탁드립니다.</p>
    </Modal>
  );

  return (
    <div>
      <main>
        <h1 className="text-[4rem]">
          Programmatic Modal Opening or Automatic Modal Opening
        </h1>
        <p className="text-[2rem]">
          Parent 컴포넌트인 ModalPage에 상태를 넣는 이유는 Programmatic Modal
          Opening이 가능해서이다. Programmatic Modal Opening은 사용자 버튼을
          눌렀을 때만 모달이 오픈되는 것이 아니라 경고창이라든지 사용자
          Interaction 없이 자동으로 모달을 여는 것이다.
        </p>
      </main>
      <div className="flex justify-center align-middle">
        <Button onClick={handleClick} primary>
          모달 열기
        </Button>
      </div>
      {showModal && modal}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <div className="flex justify-center align-middle">
        <Button onClick={handleClick} primary>
          모달 열기
        </Button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
        in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
        tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
        commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
        pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
        dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
        condimentum viverra scelerisque sit amet elit. Mauris eget nunc
        sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
        risus lorem.
      </p>
    </div>
  );
}

export default ModalPage;
