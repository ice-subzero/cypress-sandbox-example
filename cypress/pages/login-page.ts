//   Naming convention 
//   +----------+----------------------------+--------+-----------------+
//   | Category |      UI/Control type       | Prefix |     Example     |
//   +----------+----------------------------+--------+-----------------+
//   | Basic    | Button                     | btn    | btnExit         |
//   | Basic    | Check box                  | chk    | chkReadOnly     |
//   | Basic    | Combo box                  | cbo    | cboEnglish      |
//   | Basic    | Common dialog              | dlg    | dlgFileOpen     |
//   | Basic    | Date picker                | dtp    | dtpPublished    |
//   | Basic    | Dropdown List / Select tag | ddl    | ddlCountry      |
//   | Basic    | Form                       | frm    | frmEntry        |
//   | Basic    | Frame                      | fra    | fraLanguage     |
//   | Basic    | Image                      | img    | imgIcon         |
//   | Basic    | Label                      | lbl    | lblHelpMessage  |
//   | Basic    | Links/Anchor Tags          | lnk    | lnkForgotPwd    |
//   | Basic    | List box                   | lst    | lstPolicyCodes  |
//   | Basic    | Menu                       | mnu    | mnuFileOpen     |
//   | Basic    | Text Area                  | txa    | txaDescription  |
//   | Basic    | Text box                   | txt    | txtLastName     |
//   | Complex  | Panel/Fieldset             | pnl    | pnlGroup        |
//   | Complex  | Slider                     | sld    | sldScale        |
//   | Complex  | StatusBar                  | sta    | staDateTime     |
//   | Complex  | Toolbar                    | tlb    | tlbActions      |
//   +----------+----------------------------+--------+-----------------+

const loginComponent = {
    txtInputUsername: '//input[@id="username"]',
    txtInputPassword: '//input[@id="password"]',
	btnLogin: '//button[@id="loginbtn"]'
}

export default {
    loginComponent
}
