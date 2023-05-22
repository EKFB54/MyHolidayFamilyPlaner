package holiday;

import java.sql.Date;

public class Holiday {
	
	private long urlaubID; 
	private String ort;
	private String land; 
	private double preis;
	private Date ab; 
	private Date bis; 
	
	public Holiday() {
		// TODO Auto-generated constructor stub
	}
	
	public Holiday(long urlaubID, String ort, String land, double preis, Date ab, Date bis) {
		
		this.urlaubID = urlaubID; 
		this.ort = ort; 
		this.land = land; 
		this.preis = preis; 
		this.ab = ab;
		this.bis = bis; 
		
	}
	

	 // @return the urlaubID
	public long getUrlaubID() {
		return urlaubID;
	}

	/**
	 * @param urlaubID the urlaubID to set
	 */
	public void setUrlaubID(long urlaubID) {
		this.urlaubID = urlaubID;
	}
	
	
	/**
	 * @return the ort
	 */
	public String getOrt() {
		return ort;
	}
	/**
	 * @param ort the ort to set
	 */
	public void setOrt(String ort) {
		this.ort = ort;
	}
	/**
	 * @return the land
	 */
	public String getLand() {
		return land;
	}
	/**
	 * @param land the land to set
	 */
	public void setLand(String land) {
		this.land = land;
	}
	/**
	 * @return the preis
	 */
	public double getPreis() {
		return preis;
	}
	/**
	 * @param preis the preis to set
	 */
	public void setPreis(double preis) {
		this.preis = preis;
	}
	/**
	 * @return the ab
	 */
	public Date getAb() {
		return ab;
	}
	/**
	 * @param ab the ab to set
	 */
	public void setAb(Date ab) {
		this.ab = ab;
	}
	/**
	 * @return the bis
	 */
	public Date getBis() {
		return bis;
	}
	/**
	 * @param bis the bis to set
	 */
	public void setBis(Date bis) {
		this.bis = bis;
	}

}
