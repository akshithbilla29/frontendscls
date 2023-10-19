<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <table border="1">
        <tr>
          <th>accno</th>
          <th style="color:green;">name</th>
          <th style="color:blue;">balance</th>
        </tr>
        <xsl:for-each select="bank/customer">
          <tr>
            <td style="background:yellow;font-size:50px;">
              <xsl:value-of select="accno"/>
            </td>
            <td>
              <xsl:value-of select="name"/>
            </td>
            <td>
              <xsl:value-of select="bal"/>
            </td>
          </tr>
        </xsl:for-each>
      </table>
    </html>
  </xsl:template>
</xsl:stylesheet>
