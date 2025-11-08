import React, { useEffect, useRef, useState } from 'react';
import "../../assets/styles/footer.css";
import { useTheme } from "../../ThemeContext";
import FooterHeader from './footerHeader';
const typebuilding = ['building1', 'building2', 'building3', 'building4', 'building5'];
export default function Footer() {
  const [count, setCount] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const spacegroundRef = useRef(null);
  const shipRef = useRef(null);
  const countRef = useRef(null);

  const collisionIntervalRef = useRef(null);
  const buildobsRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  const move = useRef({ up: false, down: false });
  const playerTop = useRef(20);
  const { listcolor } = useTheme();
  let containercolor=listcolor.frontcontainer
  const FirstRandomView = () => {
    const spaceground = spacegroundRef.current;
    if (!spaceground) return;
    spaceground.innerHTML = '';

    for (let i = 0; i < 30; i++) {
      const randomB = Math.floor(Math.random() * 5);
      const newBuilding = document.createElement('div');
      newBuilding.className = typebuilding[randomB];
      newBuilding.id = 'build';
      newBuilding.style.marginRight = `${Math.floor(Math.random() * (30 - 10) + 10)}px`;

      if (['building1', 'building2', 'building3'].includes(typebuilding[randomB])) {
        const nobuilding = Math.floor(Math.random() * 10);
        const structure = Math.floor(Math.random() * (100 - 50) + 50);
        newBuilding.style.width = `${structure / 2}px`;
        newBuilding.style.height = `${(structure * 2) / 2}px`;

        if (nobuilding === 2 || nobuilding === 3) {
          for (let j = 1; j < nobuilding; j++) {
            const twin = newBuilding.cloneNode();
            twin.style.marginRight = '10px';
            spaceground.appendChild(twin);
          }
        }
      } else {
        const structure = Math.floor(Math.random() * (80 - 40) + 40);
        newBuilding.style.width = `${structure / 2}px`;
        newBuilding.style.height = `${structure / 2}px`;
      }
      spaceground.appendChild(newBuilding);
    }
  };

  const createBuilding = () => {
    const randomB = Math.floor(Math.random() * 5);
    const newBuilding = document.createElement('div');
    newBuilding.className = typebuilding[randomB];
    newBuilding.id = 'build';
    newBuilding.style.position = 'absolute';
    newBuilding.style.right = '0px';

    if (['building1', 'building2', 'building3'].includes(typebuilding[randomB])) {
      const nobuilding = Math.floor(Math.random() * 10);
      const structure = Math.floor(Math.random() * (100 - 50) + 50);
      newBuilding.style.width = `${structure}px`;
      newBuilding.style.height = `${structure * 2}px`;

      if (nobuilding === 2 || nobuilding === 3) {
        for (let j = 1; j < nobuilding; j++) {
          const twin = newBuilding.cloneNode();
          twin.style.right = `-${(structure + 2) * j}px`;
          twin.style.animation = 'move 10s linear forwards';
          setTimeout(() => twin.remove(), 15000);
          spacegroundRef.current.appendChild(twin);
        }
      }
    } else {
      const structure = Math.floor(Math.random() * (80 - 40) + 40);
      newBuilding.style.width = `${structure}px`;
      newBuilding.style.height = `${structure}px`;

      const buildEnemyShip = Math.floor(Math.random() * 10);
      if (buildEnemyShip === 5 || buildEnemyShip === 3 || buildEnemyShip === 8) {
        const newShip = document.createElement('div');
        newShip.className = 'enemyship';
        newShip.id = 'build';
        newShip.style.right = '0px';
        newShip.style.animation = 'move 10s linear forwards';
        setTimeout(() => newShip.remove(), 15000);
        spacegroundRef.current.appendChild(newShip);
      }
    }

    newBuilding.style.animation = 'move 10s linear forwards';
    setTimeout(() => newBuilding.remove(), 10000);
    spacegroundRef.current.appendChild(newBuilding);
  };

  useEffect(() => {
    FirstRandomView();
  }, []);

  const handleKeyDown = (e) => {
    const key = e.key.toLowerCase();
    if (key === 'w') move.current.up = true;
    if (key === 's') move.current.down = true;
  };

  const handleKeyUp = (e) => {
    const key = e.key.toLowerCase();
    if (key === 'w') move.current.up = false;
    if (key === 's') move.current.down = false;
  };

  const updatePlayer = () => {
    if (gameOver) return;
    if (move.current.up) playerTop.current -= 2;
    if (move.current.down) playerTop.current += 2;

    const max = spacegroundRef.current.clientHeight - 100;
    playerTop.current = Math.max(0, Math.min(max, playerTop.current));
    shipRef.current.style.top = `${playerTop.current}px`;
    animationFrameIdRef.current = requestAnimationFrame(updatePlayer);
  };

  const isColliding = (el1, el2) => {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();
    return !(
      r1.top > r2.bottom ||
      r1.bottom < r2.top ||
      r1.left > r2.right ||
      r1.right < r2.left
    );
  };

  const checkCollision = () => {
    const obstacles = document.querySelectorAll('#build');
    for (let obs of obstacles) {
      if (isColliding(shipRef.current, obs)) {
        for (let build of obstacles) build.remove();
        cancelAnimationFrame(animationFrameIdRef.current);
        clearInterval(collisionIntervalRef.current);
        clearInterval(buildobsRef.current);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
        setGameOver(true);
        setStarted(false);
        move.current.up = false;
        move.current.down=false;
        setTimeout(() => {
          FirstRandomView();
          setGameOver(false);
          playerTop.current = 20;
          shipRef.current.style.top = `${playerTop.current}px`;
        }, 3000);
        return;
      }
    }
  };

  const StartWar = async () => {
    setStarted(true);
    setCount(3);
    FirstRandomView();

    const buildings = document.querySelectorAll('#build');
    buildings.forEach((b) => {
      b.style.width = b.clientWidth * 2 + 'px';
      b.style.height = b.clientHeight * 2 + 'px';
      // b.style.animation = 'move 10s linear forwards'
    });

    let countdown = 3;
    const interval = setInterval(() => {
      countdown--;
      if (countdown === 0) {
        setCount(null);
        clearInterval(interval);
      }
      setCount(countdown);
    }, 1000);

    setTimeout(() => {
      setCount(null);
      buildings.forEach((b) => {
      b.style.animation = 'move 10s linear forwards'
    });
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
      collisionIntervalRef.current = setInterval(checkCollision, 30);
      buildobsRef.current = setInterval(createBuilding, 700);
      updatePlayer();
    }, 4000);
  };

  const StopWar = () => {
    const obstacles = document.querySelectorAll('#build');
    for (let build of obstacles) build.remove();
    cancelAnimationFrame(animationFrameIdRef.current);
    clearInterval(collisionIntervalRef.current);
    clearInterval(buildobsRef.current);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyUp);
    setGameOver(true);
    setStarted(false);
    setTimeout(() => {
      FirstRandomView();
      setGameOver(false);
      playerTop.current = 20;
      shipRef.current.style.top = `${playerTop.current}px`;
    }, 3000);
  };

  return (
    <footer>
      {/* <FooterHeader /> */}
      <div className="ManageGame" >
        {count !== null && <div className="startcount">{count}</div>}
        {gameOver && (
          <div className="gameovar">
            <h2>Game Over</h2>
          </div>
        )}
        {!started && (
          <button className="startbutton" onClick={StartWar}>start</button>
        )}
        {started && (
          <button className="Stopbutton" onClick={StopWar}>Stop</button>
        )}
       {!true && (
        <div className='footerContent'>
          <p style={{ width:"400px",font:"normal normal normal 18px / 1.2em madefor-text, helveticaneuew01-45ligh, helveticaneuew02-45ligh, helveticaneuew10-45ligh, sans-serif"}}>
          Well,<br></br><br></br>Starting with, <br></br>"hello World"
          </p>
        </div>
       )}
        <span>© 2024 Asfar Muhammed. All Rights Reserved.</span>
      </div>
      <main>
        <section className="spacegroup" id="spaceground">
          <div className="alienship" ref={shipRef}></div>
          <div className="basebuild" ref={spacegroundRef}></div>
        </section>
        <section className="base"></section>
      </main>
    </footer>
  );
}
