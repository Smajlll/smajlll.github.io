import styles from '/styles/Home.module.css'
import Head from 'next/head';
import Link from 'next/link';

const post3 = () => {
    return (
    <> 
        <Head>
            <title>Vítek | Spouštění QEMU ve WSL</title>
        </Head>
        <div>
        <h1 className={styles.title}>Spouštění QEMU ve WSL</h1>
        <p className={styles.text}>Ahoj Ahoj, tady zase a znova Vítek. Dneska jsem si za úkol dal jednoduše, spustit pomocí QEMU VM Počitač ve WSL</p>
        <p className={styles.text}>Takže, začneme jednoduše, zapnul jsem si powershell a spustil jsem příkaz:</p>
        <p className={styles.codesnip}>wsl --update && wsl --install -d Debian</p>
        <p className={styles.text}>Dál jsem nastalvil username a heslo a byl jsem v BASHi.</p>
        <p className={styles.text}>Ale před tím než nainstalujeme QEMU si aktualizujeme systém, takže:</p>
        <p className={styles.codesnip}>sudo apt update -y && sudo apt upgrade -y</p>
        <p className={styles.text}>Potom už stačilo jenom nainstalovat QEMU a dalši potřebné věcičky</p>
        <p className={styles.codesnip}>sudo apt install wget unzip quemu</p>
        <p className={styles.codesnip}>No a co teď? No teď už můžeme začít využívat QEMU pomocí X11</p>
        <p className={styles.text}>Před začátkem jsem si vytvořil složku</p>
        <p className={styles.codesnip}>mkdir cos && cd cos</p>
        <p className={styles.text}>A stáhl jsem si soubor s .img souborem a rozbalil jsem ho</p>
        <p className={styles.codesnip}>unzip chromeos_15117.112.0_reven_recovery_stable-channel_mp-v2.bin.zip</p>
        <p className={styles.text}>A vytvořil jsem si virtuální HDD pro QEMU s velikostí 20GB</p>
        <p className={styles.codesnip}>qemu-img create disk.img 20G</p>
        <p className={styles.text}>a pokusil jsem se nabootovat pomocí příkazu:</p>
        <p className={styles.codesnip}> sudo qemu-system-x86_64 -enable-kvm -m 6G -smp 4 -machine q35 -cpu host -device virtio-vga-gl -rtc base=utc -hda chromeos_15117.112.0_reven_recovery_stable-channel_mp-v2.bin -hdb disk.img -display gtk,gl=on,show-cursor=on -usb -device usb-tablet</p>
        <p className={styles.text}>A ono nic? - Ano přesně tak, skončil jsem s chybou:</p>
        <p className={styles.codesnip}>Couldnt open libEGL.so.1: libEGL.so.1: cannot open shared object file: No such file or directory; Aborted</p>
        <p className={styles.text}>A bohužel jsem se dál zatím nedostal, budu poskytovat updaty s mým pokrokem. Tady byl Vítek, a zatím ✌️</p>

        
        </div>
    </>
     );
}
 
export default post3;
