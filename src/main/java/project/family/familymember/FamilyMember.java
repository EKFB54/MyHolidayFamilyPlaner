package project.family.familymember;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import project.family.prio.Prio;
import project.family.holiday.Holiday;
import project.family.holidaywish.HolidayWish;


@Entity
public class FamilyMember {

	//Variablen deklarien 
	//die Variable id mit Datentyp Long, firstname mit Datentyp String, secondName mit Datentyp String, bDay mit Datentyp Date
	
	@Id //Primärschlüssel in der Datenbank
	@GeneratedValue(strategy = GenerationType.AUTO)	// ID wird automtisch vergeben
	private long id; 
	private String firstName;
	private String secondName; 
	private Date bDay;
	
	@OneToMany(mappedBy="familyMember")// Eins zu viele Beziehung zu Prioritäten
	@JsonIgnore
	private List<Prio> priorities;
	
	

	//Konstrukor defoult und ein Konstruktor mit parametern um die attribute zu setzen beim erstellen eines Objektes
	public FamilyMember() {
		// TODO Auto-generated constructor stub
	}
	
	public FamilyMember(long id, String firstName, String secondName, Date bDay) {
		
	this.id = id;
	this.firstName = firstName;
	this.secondName = secondName;
	this.bDay = bDay;
		
	}

	//getter und setter methoden 

	//@return the id
	public long getId() {
		return id;
	}

	//@param id the id to set
	public void setId(long id) {
		this.id = id;
	}

	//@return the firstName
	public String getFirstName() {
		return firstName;
	}

	//@param firstName the firstName to set
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	//@return the secondName
	public String getSecondName() {
		return secondName;
	}

	// @param secondName the secondName to set
	public void setSecondName(String secondName) {
		this.secondName = secondName;
	}

	//@return the bDay
	public Date getbDay() {
		return bDay;
	}

	//@param bDay the bDay to set
	public void setbDay(Date bDay) {
		this.bDay = bDay;
	}

}
