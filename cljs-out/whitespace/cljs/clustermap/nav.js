// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.xpath');
goog.require('jayq.core');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('jayq.core');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
} else
{return null;
}
}
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.call(null,"body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__33656_33662 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33657_33663 = null;var count__33658_33664 = 0;var i__33659_33665 = 0;while(true){
if((i__33659_33665 < count__33658_33664))
{var vec__33660_33666 = cljs.core._nth.call(null,chunk__33657_33663,i__33659_33665);var v_33667 = cljs.core.nth.call(null,vec__33660_33666,0,null);var body_class_33668 = cljs.core.nth.call(null,vec__33660_33666,1,null);if(cljs.core._EQ_.call(null,v_33667,view))
{domina.add_class_BANG_.call(null,body,body_class_33668);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33668);
}
{
var G__33669 = seq__33656_33662;
var G__33670 = chunk__33657_33663;
var G__33671 = count__33658_33664;
var G__33672 = (i__33659_33665 + 1);
seq__33656_33662 = G__33669;
chunk__33657_33663 = G__33670;
count__33658_33664 = G__33671;
i__33659_33665 = G__33672;
continue;
}
} else
{var temp__4092__auto___33673 = cljs.core.seq.call(null,seq__33656_33662);if(temp__4092__auto___33673)
{var seq__33656_33674__$1 = temp__4092__auto___33673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33656_33674__$1))
{var c__4148__auto___33675 = cljs.core.chunk_first.call(null,seq__33656_33674__$1);{
var G__33676 = cljs.core.chunk_rest.call(null,seq__33656_33674__$1);
var G__33677 = c__4148__auto___33675;
var G__33678 = cljs.core.count.call(null,c__4148__auto___33675);
var G__33679 = 0;
seq__33656_33662 = G__33676;
chunk__33657_33663 = G__33677;
count__33658_33664 = G__33678;
i__33659_33665 = G__33679;
continue;
}
} else
{var vec__33661_33680 = cljs.core.first.call(null,seq__33656_33674__$1);var v_33681 = cljs.core.nth.call(null,vec__33661_33680,0,null);var body_class_33682 = cljs.core.nth.call(null,vec__33661_33680,1,null);if(cljs.core._EQ_.call(null,v_33681,view))
{domina.add_class_BANG_.call(null,body,body_class_33682);
} else
{domina.remove_class_BANG_.call(null,body,body_class_33682);
}
{
var G__33683 = cljs.core.next.call(null,seq__33656_33674__$1);
var G__33684 = null;
var G__33685 = 0;
var G__33686 = 0;
seq__33656_33662 = G__33683;
chunk__33657_33663 = G__33684;
count__33658_33664 = G__33685;
i__33659_33665 = G__33686;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__33693 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__33694 = null;var count__33695 = 0;var i__33696 = 0;while(true){
if((i__33696 < count__33695))
{var vec__33697 = cljs.core._nth.call(null,chunk__33694,i__33696);var v = cljs.core.nth.call(null,vec__33697,0,null);var _ = cljs.core.nth.call(null,vec__33697,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33693,chunk__33694,count__33695,i__33696,vec__33697,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33693,chunk__33694,count__33695,i__33696,vec__33697,v,_))
);
{
var G__33699 = seq__33693;
var G__33700 = chunk__33694;
var G__33701 = count__33695;
var G__33702 = (i__33696 + 1);
seq__33693 = G__33699;
chunk__33694 = G__33700;
count__33695 = G__33701;
i__33696 = G__33702;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33693);if(temp__4092__auto__)
{var seq__33693__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33693__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33693__$1);{
var G__33703 = cljs.core.chunk_rest.call(null,seq__33693__$1);
var G__33704 = c__4148__auto__;
var G__33705 = cljs.core.count.call(null,c__4148__auto__);
var G__33706 = 0;
seq__33693 = G__33703;
chunk__33694 = G__33704;
count__33695 = G__33705;
i__33696 = G__33706;
continue;
}
} else
{var vec__33698 = cljs.core.first.call(null,seq__33693__$1);var v = cljs.core.nth.call(null,vec__33698,0,null);var _ = cljs.core.nth.call(null,vec__33698,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__33693,chunk__33694,count__33695,i__33696,vec__33698,v,_,seq__33693__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__33693,chunk__33694,count__33695,i__33696,vec__33698,v,_,seq__33693__$1,temp__4092__auto__))
);
{
var G__33707 = cljs.core.next.call(null,seq__33693__$1);
var G__33708 = null;
var G__33709 = 0;
var G__33710 = 0;
seq__33693 = G__33707;
chunk__33694 = G__33708;
count__33695 = G__33709;
i__33696 = G__33710;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});
