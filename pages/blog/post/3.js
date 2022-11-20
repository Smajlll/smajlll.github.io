import styles from '/styles/Home.module.css'
import Head from 'next/head';
import Link from 'next/link';

const post3 = () => {
    return (
    <> 
        <Head>
            <title>Vítek | ChromeOS Flex v QEMU</title>
        </Head>
        <div>
        <h1 className={styles.title}>Spouštění ChromeOS Flex v QEMU</h1>
        <p className={styles.text}>Ahoj, tady zas a znova Vítek. Dneska jsem se pokusil a dokonce se mi i povedlo spustit Google ChromeOS Flex v QEMU na svém Arch Linuxu :D</p>
        <p className={styles.text}>Takže, než začneme, budeme potřebovat nainstalovat QEMU, unzip a wget, dále si taky stáhnout .bin soubor pro ChromeOS Flex.</p>
        <p className={styles.text}>Na mém počítači je instalace potřebných programů je vcelku jednoduchá. Stačí napsat příkaz</p>
        <p className={styles.codesnip}>yay -S wget unzip qemu</p>
        <p className={styles.text}>Dále jsem si stáhnul nejnovější recovery soubor pro ChromeOS Flex ze stránky <Link legacyBehavior href="https://chromiumdash.appspot.com/serving-builds?deviceCategory=ChromeOS%20Flex"><a>Chromium Dash</a></Link></p>
        <p className={styles.text}>Pro ty co mají radši CLI, můžete použít tento příkaz:</p>
        <p className={styles.codesnip}>wget https://dl.google.com/dl/edgedl/chromeos/recovery/chromeos_15117.112.0_reven_recovery_stable-channel_mp-v2.bin.zip</p>
        <p className={styles.text}>Tento příkaz stáhnul .zip soubor pro momentální nejnovější verzi ChromeOS Flex, 107.</p>
        <p className={styles.text}>Dále jsem stažený soubor extrahoval pomocí příkazu unzip</p>
        <p className={styles.codesnip}>unzip chromeos_15117.112.0_reven_recovery_stable-channel_mp-v2.bin.zip</p>
        <p className={styles.text}>A už zbývá jen pár posledních kroků. Prvně si musíme vytvořit alespoň 20GB virtuální disk. Já jsem vytvořil disk s velikostí 20GB tímto příkazem:</p>
        <p className={styles.codesnip}>qemu-img create disk.img 20G</p>
        <p className={styles.text}>A teď už jsme připraveni nabootovat do ChromeOS Flex Instalace. To uděláme pomocí příkazu:</p>
        <p className={styles.codesnip}>qemu-system-x86_64 -enable-kvm -m Kolik Ramky chcete dát ChromeOS Flex -smp 4 -machine q35 -cpu host -device virtio-vga-gl -rtc base=utc -hda Jméno Vašeho Recovery Souboru s příponou .bin -hdb disk.img -display gtk,gl=on,show-cursor=on -usb -device usb-tablet</p>
        <p className={styles.text}>Jako input zařízení používáme Virtuální grafický tablet, protože ChromeOS Flex nemá rádo Virtuální myš QEMU. Tím pádem přijdeme o scrollování a pravé tlačítko. Scrollování můžeme nahradit tažením, jako když chceme přetáhnout ikony. Bohužel jsem žádnou náhradu pro pravé tlačítko myši nenašel.  </p>
        <p className={styles.text}>A máme hotovo, po cvíli by jste měli vidět logo ChromeOS Flex a dále uvítací obrazovku! Nyní již můžete nainstalovat ChromeOS Flex, pomocí stisknutí tlačítka <a>Next</a> v pravém dolním rohu, a poté znovu zvolít <a>Next</a> s označenou možností <a>Install ChromeOS Flex</a> a po potvrzení instalace, bude systém nainstalován na disk.img který jsme vytvořili před chvílí.</p>
        <p className={styles.text}>Po instalaci můžete vypnout systém a nabootovat přímo do systému z našeho disk.img na který jsme nainstalovali ChromeOS Flex pomocí příkazu:</p>
        <p className={styles.codesnip}>qemu-system-x86_64 -enable-kvm -m Kolik Ramky chcete dát ChromeOS Flex -smp 4 -machine q35 -cpu host -device virtio-vga-gl -rtc base=utc -display gtk,gl=on,show-cursor=on -usb -device usb-tablet -hda disk.img</p>
        <p className={styles.text}>A máme hotovo! Po zadání příkazu nahoře, by mělo ChromeOS Flex nabootovat na stejnou uvítací obrazovku jako při instalaci, ale nyní již bootujeme z disk.img. Můžeme projít prvotní instalací a přihlásit se naším Google účtem a užít si používání ChromeOS Flex.</p>
        <p className={styles.text}>Díky za přečtení, pokud máte nějaké otázky, pište mi na Discord Smajl#3337. Mějte se, smějte se a ✌️</p>
        
        </div>
    </>
     );
}
 
export default post3;
