//
//  ViewController.swift
//  Throw a Milkshake
//
//  Created by Melanie Bilbrey on 9/14/19.
//  Copyright © 2019 melkat.dev. All rights reserved.
//

import Cocoa
import SafariServices.SFSafariApplication

class ViewController: NSViewController {

    @IBOutlet var appNameLabel: NSTextField!
    @IBOutlet var appDescLabel: NSTextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.appNameLabel.stringValue = "Throw a Milkshake";
        self.appDescLabel.stringValue = "Select a tweet (with j or k) and press\n⇧ Shift + G for hate speech targeting a group,\n⇧ Shift + S for hate speech targetting an individual.";
    }
    
    @IBAction func openSafariExtensionPreferences(_ sender: AnyObject?) {
        SFSafariApplication.showPreferencesForExtension(withIdentifier: "melkat.dev.Throw-a-Milkshake-Extension") { error in
            if let _ = error {
                // Insert code to inform the user that something went wrong.

            }
        }
    }

}
