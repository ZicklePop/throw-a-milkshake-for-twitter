//
//  SafariExtensionViewController.swift
//  Throw a Milkshake Extension
//
//  Created by Melanie Bilbrey on 9/14/19.
//  Copyright © 2019 melkat.dev. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
