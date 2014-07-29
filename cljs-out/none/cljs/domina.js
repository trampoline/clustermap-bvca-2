// Compiled by ClojureScript 0.0-2268
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_55508 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_55509 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_55510 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_55510,opt_wrapper_55508,table_section_wrapper_55509,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_55508,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_55509,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_55509,cell_wrapper_55510,table_section_wrapper_55509,table_section_wrapper_55509]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__55515 = cljs.core.seq.call(null,tbody);var chunk__55516 = null;var count__55517 = (0);var i__55518 = (0);while(true){
if((i__55518 < count__55517))
{var child = cljs.core._nth.call(null,chunk__55516,i__55518);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__55519 = seq__55515;
var G__55520 = chunk__55516;
var G__55521 = count__55517;
var G__55522 = (i__55518 + (1));
seq__55515 = G__55519;
chunk__55516 = G__55520;
count__55517 = G__55521;
i__55518 = G__55522;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__55515);if(temp__4126__auto__)
{var seq__55515__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55515__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__55515__$1);{
var G__55523 = cljs.core.chunk_rest.call(null,seq__55515__$1);
var G__55524 = c__4299__auto__;
var G__55525 = cljs.core.count.call(null,c__4299__auto__);
var G__55526 = (0);
seq__55515 = G__55523;
chunk__55516 = G__55524;
count__55517 = G__55525;
i__55518 = G__55526;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__55515__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__55527 = cljs.core.next.call(null,seq__55515__$1);
var G__55528 = null;
var G__55529 = (0);
var G__55530 = (0);
seq__55515 = G__55527;
chunk__55516 = G__55528;
count__55517 = G__55529;
i__55518 = G__55530;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__55532 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__55532,(0),null);var start_wrap = cljs.core.nth.call(null,vec__55532,(1),null);var end_wrap = cljs.core.nth.call(null,vec__55532,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__55533 = wrapper.lastChild;
var G__55534 = (level - (1));
wrapper = G__55533;
level = G__55534;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj55536 = {};return obj55536;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__55537){
var mesg = cljs.core.seq(arglist__55537);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__55538){
var mesg = cljs.core.seq(arglist__55538);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__55539){
var contents = cljs.core.seq(arglist__55539);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__55540_SHARP_){return p1__55540_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__55541_SHARP_,p2__55542_SHARP_){return goog.dom.insertChildAt(p1__55541_SHARP_,p2__55542_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__55544_SHARP_,p2__55543_SHARP_){return goog.dom.insertSiblingBefore(p2__55543_SHARP_,p1__55544_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__55546_SHARP_,p2__55545_SHARP_){return goog.dom.insertSiblingAfter(p2__55545_SHARP_,p1__55546_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__55548_SHARP_,p2__55547_SHARP_){return goog.dom.replaceNode(p2__55547_SHARP_,p1__55548_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__55553_55557 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55554_55558 = null;var count__55555_55559 = (0);var i__55556_55560 = (0);while(true){
if((i__55556_55560 < count__55555_55559))
{var n_55561 = cljs.core._nth.call(null,chunk__55554_55558,i__55556_55560);goog.style.setStyle(n_55561,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__55562 = seq__55553_55557;
var G__55563 = chunk__55554_55558;
var G__55564 = count__55555_55559;
var G__55565 = (i__55556_55560 + (1));
seq__55553_55557 = G__55562;
chunk__55554_55558 = G__55563;
count__55555_55559 = G__55564;
i__55556_55560 = G__55565;
continue;
}
} else
{var temp__4126__auto___55566 = cljs.core.seq.call(null,seq__55553_55557);if(temp__4126__auto___55566)
{var seq__55553_55567__$1 = temp__4126__auto___55566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55553_55567__$1))
{var c__4299__auto___55568 = cljs.core.chunk_first.call(null,seq__55553_55567__$1);{
var G__55569 = cljs.core.chunk_rest.call(null,seq__55553_55567__$1);
var G__55570 = c__4299__auto___55568;
var G__55571 = cljs.core.count.call(null,c__4299__auto___55568);
var G__55572 = (0);
seq__55553_55557 = G__55569;
chunk__55554_55558 = G__55570;
count__55555_55559 = G__55571;
i__55556_55560 = G__55572;
continue;
}
} else
{var n_55573 = cljs.core.first.call(null,seq__55553_55567__$1);goog.style.setStyle(n_55573,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__55574 = cljs.core.next.call(null,seq__55553_55567__$1);
var G__55575 = null;
var G__55576 = (0);
var G__55577 = (0);
seq__55553_55557 = G__55574;
chunk__55554_55558 = G__55575;
count__55555_55559 = G__55576;
i__55556_55560 = G__55577;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__55578){
var content = cljs.core.first(arglist__55578);
arglist__55578 = cljs.core.next(arglist__55578);
var name = cljs.core.first(arglist__55578);
var value = cljs.core.rest(arglist__55578);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__55583_55587 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55584_55588 = null;var count__55585_55589 = (0);var i__55586_55590 = (0);while(true){
if((i__55586_55590 < count__55585_55589))
{var n_55591 = cljs.core._nth.call(null,chunk__55584_55588,i__55586_55590);n_55591.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__55592 = seq__55583_55587;
var G__55593 = chunk__55584_55588;
var G__55594 = count__55585_55589;
var G__55595 = (i__55586_55590 + (1));
seq__55583_55587 = G__55592;
chunk__55584_55588 = G__55593;
count__55585_55589 = G__55594;
i__55586_55590 = G__55595;
continue;
}
} else
{var temp__4126__auto___55596 = cljs.core.seq.call(null,seq__55583_55587);if(temp__4126__auto___55596)
{var seq__55583_55597__$1 = temp__4126__auto___55596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55583_55597__$1))
{var c__4299__auto___55598 = cljs.core.chunk_first.call(null,seq__55583_55597__$1);{
var G__55599 = cljs.core.chunk_rest.call(null,seq__55583_55597__$1);
var G__55600 = c__4299__auto___55598;
var G__55601 = cljs.core.count.call(null,c__4299__auto___55598);
var G__55602 = (0);
seq__55583_55587 = G__55599;
chunk__55584_55588 = G__55600;
count__55585_55589 = G__55601;
i__55586_55590 = G__55602;
continue;
}
} else
{var n_55603 = cljs.core.first.call(null,seq__55583_55597__$1);n_55603.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__55604 = cljs.core.next.call(null,seq__55583_55597__$1);
var G__55605 = null;
var G__55606 = (0);
var G__55607 = (0);
seq__55583_55587 = G__55604;
chunk__55584_55588 = G__55605;
count__55585_55589 = G__55606;
i__55586_55590 = G__55607;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__55608){
var content = cljs.core.first(arglist__55608);
arglist__55608 = cljs.core.next(arglist__55608);
var name = cljs.core.first(arglist__55608);
var value = cljs.core.rest(arglist__55608);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__55613_55617 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55614_55618 = null;var count__55615_55619 = (0);var i__55616_55620 = (0);while(true){
if((i__55616_55620 < count__55615_55619))
{var n_55621 = cljs.core._nth.call(null,chunk__55614_55618,i__55616_55620);n_55621.removeAttribute(cljs.core.name.call(null,name));
{
var G__55622 = seq__55613_55617;
var G__55623 = chunk__55614_55618;
var G__55624 = count__55615_55619;
var G__55625 = (i__55616_55620 + (1));
seq__55613_55617 = G__55622;
chunk__55614_55618 = G__55623;
count__55615_55619 = G__55624;
i__55616_55620 = G__55625;
continue;
}
} else
{var temp__4126__auto___55626 = cljs.core.seq.call(null,seq__55613_55617);if(temp__4126__auto___55626)
{var seq__55613_55627__$1 = temp__4126__auto___55626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55613_55627__$1))
{var c__4299__auto___55628 = cljs.core.chunk_first.call(null,seq__55613_55627__$1);{
var G__55629 = cljs.core.chunk_rest.call(null,seq__55613_55627__$1);
var G__55630 = c__4299__auto___55628;
var G__55631 = cljs.core.count.call(null,c__4299__auto___55628);
var G__55632 = (0);
seq__55613_55617 = G__55629;
chunk__55614_55618 = G__55630;
count__55615_55619 = G__55631;
i__55616_55620 = G__55632;
continue;
}
} else
{var n_55633 = cljs.core.first.call(null,seq__55613_55627__$1);n_55633.removeAttribute(cljs.core.name.call(null,name));
{
var G__55634 = cljs.core.next.call(null,seq__55613_55627__$1);
var G__55635 = null;
var G__55636 = (0);
var G__55637 = (0);
seq__55613_55617 = G__55634;
chunk__55614_55618 = G__55635;
count__55615_55619 = G__55636;
i__55616_55620 = G__55637;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__55639 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__55639,(0),null);var v = cljs.core.nth.call(null,vec__55639,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__55640_SHARP_){var attr = attrs__$1.item(p1__55640_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__55647_55653 = cljs.core.seq.call(null,styles);var chunk__55648_55654 = null;var count__55649_55655 = (0);var i__55650_55656 = (0);while(true){
if((i__55650_55656 < count__55649_55655))
{var vec__55651_55657 = cljs.core._nth.call(null,chunk__55648_55654,i__55650_55656);var name_55658 = cljs.core.nth.call(null,vec__55651_55657,(0),null);var value_55659 = cljs.core.nth.call(null,vec__55651_55657,(1),null);domina.set_style_BANG_.call(null,content,name_55658,value_55659);
{
var G__55660 = seq__55647_55653;
var G__55661 = chunk__55648_55654;
var G__55662 = count__55649_55655;
var G__55663 = (i__55650_55656 + (1));
seq__55647_55653 = G__55660;
chunk__55648_55654 = G__55661;
count__55649_55655 = G__55662;
i__55650_55656 = G__55663;
continue;
}
} else
{var temp__4126__auto___55664 = cljs.core.seq.call(null,seq__55647_55653);if(temp__4126__auto___55664)
{var seq__55647_55665__$1 = temp__4126__auto___55664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55647_55665__$1))
{var c__4299__auto___55666 = cljs.core.chunk_first.call(null,seq__55647_55665__$1);{
var G__55667 = cljs.core.chunk_rest.call(null,seq__55647_55665__$1);
var G__55668 = c__4299__auto___55666;
var G__55669 = cljs.core.count.call(null,c__4299__auto___55666);
var G__55670 = (0);
seq__55647_55653 = G__55667;
chunk__55648_55654 = G__55668;
count__55649_55655 = G__55669;
i__55650_55656 = G__55670;
continue;
}
} else
{var vec__55652_55671 = cljs.core.first.call(null,seq__55647_55665__$1);var name_55672 = cljs.core.nth.call(null,vec__55652_55671,(0),null);var value_55673 = cljs.core.nth.call(null,vec__55652_55671,(1),null);domina.set_style_BANG_.call(null,content,name_55672,value_55673);
{
var G__55674 = cljs.core.next.call(null,seq__55647_55665__$1);
var G__55675 = null;
var G__55676 = (0);
var G__55677 = (0);
seq__55647_55653 = G__55674;
chunk__55648_55654 = G__55675;
count__55649_55655 = G__55676;
i__55650_55656 = G__55677;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__55684_55690 = cljs.core.seq.call(null,attrs);var chunk__55685_55691 = null;var count__55686_55692 = (0);var i__55687_55693 = (0);while(true){
if((i__55687_55693 < count__55686_55692))
{var vec__55688_55694 = cljs.core._nth.call(null,chunk__55685_55691,i__55687_55693);var name_55695 = cljs.core.nth.call(null,vec__55688_55694,(0),null);var value_55696 = cljs.core.nth.call(null,vec__55688_55694,(1),null);domina.set_attr_BANG_.call(null,content,name_55695,value_55696);
{
var G__55697 = seq__55684_55690;
var G__55698 = chunk__55685_55691;
var G__55699 = count__55686_55692;
var G__55700 = (i__55687_55693 + (1));
seq__55684_55690 = G__55697;
chunk__55685_55691 = G__55698;
count__55686_55692 = G__55699;
i__55687_55693 = G__55700;
continue;
}
} else
{var temp__4126__auto___55701 = cljs.core.seq.call(null,seq__55684_55690);if(temp__4126__auto___55701)
{var seq__55684_55702__$1 = temp__4126__auto___55701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55684_55702__$1))
{var c__4299__auto___55703 = cljs.core.chunk_first.call(null,seq__55684_55702__$1);{
var G__55704 = cljs.core.chunk_rest.call(null,seq__55684_55702__$1);
var G__55705 = c__4299__auto___55703;
var G__55706 = cljs.core.count.call(null,c__4299__auto___55703);
var G__55707 = (0);
seq__55684_55690 = G__55704;
chunk__55685_55691 = G__55705;
count__55686_55692 = G__55706;
i__55687_55693 = G__55707;
continue;
}
} else
{var vec__55689_55708 = cljs.core.first.call(null,seq__55684_55702__$1);var name_55709 = cljs.core.nth.call(null,vec__55689_55708,(0),null);var value_55710 = cljs.core.nth.call(null,vec__55689_55708,(1),null);domina.set_attr_BANG_.call(null,content,name_55709,value_55710);
{
var G__55711 = cljs.core.next.call(null,seq__55684_55702__$1);
var G__55712 = null;
var G__55713 = (0);
var G__55714 = (0);
seq__55684_55690 = G__55711;
chunk__55685_55691 = G__55712;
count__55686_55692 = G__55713;
i__55687_55693 = G__55714;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__55719_55723 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55720_55724 = null;var count__55721_55725 = (0);var i__55722_55726 = (0);while(true){
if((i__55722_55726 < count__55721_55725))
{var node_55727 = cljs.core._nth.call(null,chunk__55720_55724,i__55722_55726);goog.dom.classes.add(node_55727,class$);
{
var G__55728 = seq__55719_55723;
var G__55729 = chunk__55720_55724;
var G__55730 = count__55721_55725;
var G__55731 = (i__55722_55726 + (1));
seq__55719_55723 = G__55728;
chunk__55720_55724 = G__55729;
count__55721_55725 = G__55730;
i__55722_55726 = G__55731;
continue;
}
} else
{var temp__4126__auto___55732 = cljs.core.seq.call(null,seq__55719_55723);if(temp__4126__auto___55732)
{var seq__55719_55733__$1 = temp__4126__auto___55732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55719_55733__$1))
{var c__4299__auto___55734 = cljs.core.chunk_first.call(null,seq__55719_55733__$1);{
var G__55735 = cljs.core.chunk_rest.call(null,seq__55719_55733__$1);
var G__55736 = c__4299__auto___55734;
var G__55737 = cljs.core.count.call(null,c__4299__auto___55734);
var G__55738 = (0);
seq__55719_55723 = G__55735;
chunk__55720_55724 = G__55736;
count__55721_55725 = G__55737;
i__55722_55726 = G__55738;
continue;
}
} else
{var node_55739 = cljs.core.first.call(null,seq__55719_55733__$1);goog.dom.classes.add(node_55739,class$);
{
var G__55740 = cljs.core.next.call(null,seq__55719_55733__$1);
var G__55741 = null;
var G__55742 = (0);
var G__55743 = (0);
seq__55719_55723 = G__55740;
chunk__55720_55724 = G__55741;
count__55721_55725 = G__55742;
i__55722_55726 = G__55743;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__55748_55752 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55749_55753 = null;var count__55750_55754 = (0);var i__55751_55755 = (0);while(true){
if((i__55751_55755 < count__55750_55754))
{var node_55756 = cljs.core._nth.call(null,chunk__55749_55753,i__55751_55755);goog.dom.classes.remove(node_55756,class$);
{
var G__55757 = seq__55748_55752;
var G__55758 = chunk__55749_55753;
var G__55759 = count__55750_55754;
var G__55760 = (i__55751_55755 + (1));
seq__55748_55752 = G__55757;
chunk__55749_55753 = G__55758;
count__55750_55754 = G__55759;
i__55751_55755 = G__55760;
continue;
}
} else
{var temp__4126__auto___55761 = cljs.core.seq.call(null,seq__55748_55752);if(temp__4126__auto___55761)
{var seq__55748_55762__$1 = temp__4126__auto___55761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55748_55762__$1))
{var c__4299__auto___55763 = cljs.core.chunk_first.call(null,seq__55748_55762__$1);{
var G__55764 = cljs.core.chunk_rest.call(null,seq__55748_55762__$1);
var G__55765 = c__4299__auto___55763;
var G__55766 = cljs.core.count.call(null,c__4299__auto___55763);
var G__55767 = (0);
seq__55748_55752 = G__55764;
chunk__55749_55753 = G__55765;
count__55750_55754 = G__55766;
i__55751_55755 = G__55767;
continue;
}
} else
{var node_55768 = cljs.core.first.call(null,seq__55748_55762__$1);goog.dom.classes.remove(node_55768,class$);
{
var G__55769 = cljs.core.next.call(null,seq__55748_55762__$1);
var G__55770 = null;
var G__55771 = (0);
var G__55772 = (0);
seq__55748_55752 = G__55769;
chunk__55749_55753 = G__55770;
count__55750_55754 = G__55771;
i__55751_55755 = G__55772;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__55777_55781 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55778_55782 = null;var count__55779_55783 = (0);var i__55780_55784 = (0);while(true){
if((i__55780_55784 < count__55779_55783))
{var node_55785 = cljs.core._nth.call(null,chunk__55778_55782,i__55780_55784);goog.dom.classes.toggle(node_55785,class$);
{
var G__55786 = seq__55777_55781;
var G__55787 = chunk__55778_55782;
var G__55788 = count__55779_55783;
var G__55789 = (i__55780_55784 + (1));
seq__55777_55781 = G__55786;
chunk__55778_55782 = G__55787;
count__55779_55783 = G__55788;
i__55780_55784 = G__55789;
continue;
}
} else
{var temp__4126__auto___55790 = cljs.core.seq.call(null,seq__55777_55781);if(temp__4126__auto___55790)
{var seq__55777_55791__$1 = temp__4126__auto___55790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55777_55791__$1))
{var c__4299__auto___55792 = cljs.core.chunk_first.call(null,seq__55777_55791__$1);{
var G__55793 = cljs.core.chunk_rest.call(null,seq__55777_55791__$1);
var G__55794 = c__4299__auto___55792;
var G__55795 = cljs.core.count.call(null,c__4299__auto___55792);
var G__55796 = (0);
seq__55777_55781 = G__55793;
chunk__55778_55782 = G__55794;
count__55779_55783 = G__55795;
i__55780_55784 = G__55796;
continue;
}
} else
{var node_55797 = cljs.core.first.call(null,seq__55777_55791__$1);goog.dom.classes.toggle(node_55797,class$);
{
var G__55798 = cljs.core.next.call(null,seq__55777_55791__$1);
var G__55799 = null;
var G__55800 = (0);
var G__55801 = (0);
seq__55777_55781 = G__55798;
chunk__55778_55782 = G__55799;
count__55779_55783 = G__55800;
i__55780_55784 = G__55801;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_55810__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__55806_55811 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55807_55812 = null;var count__55808_55813 = (0);var i__55809_55814 = (0);while(true){
if((i__55809_55814 < count__55808_55813))
{var node_55815 = cljs.core._nth.call(null,chunk__55807_55812,i__55809_55814);goog.dom.classes.set(node_55815,classes_55810__$1);
{
var G__55816 = seq__55806_55811;
var G__55817 = chunk__55807_55812;
var G__55818 = count__55808_55813;
var G__55819 = (i__55809_55814 + (1));
seq__55806_55811 = G__55816;
chunk__55807_55812 = G__55817;
count__55808_55813 = G__55818;
i__55809_55814 = G__55819;
continue;
}
} else
{var temp__4126__auto___55820 = cljs.core.seq.call(null,seq__55806_55811);if(temp__4126__auto___55820)
{var seq__55806_55821__$1 = temp__4126__auto___55820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55806_55821__$1))
{var c__4299__auto___55822 = cljs.core.chunk_first.call(null,seq__55806_55821__$1);{
var G__55823 = cljs.core.chunk_rest.call(null,seq__55806_55821__$1);
var G__55824 = c__4299__auto___55822;
var G__55825 = cljs.core.count.call(null,c__4299__auto___55822);
var G__55826 = (0);
seq__55806_55811 = G__55823;
chunk__55807_55812 = G__55824;
count__55808_55813 = G__55825;
i__55809_55814 = G__55826;
continue;
}
} else
{var node_55827 = cljs.core.first.call(null,seq__55806_55821__$1);goog.dom.classes.set(node_55827,classes_55810__$1);
{
var G__55828 = cljs.core.next.call(null,seq__55806_55821__$1);
var G__55829 = null;
var G__55830 = (0);
var G__55831 = (0);
seq__55806_55811 = G__55828;
chunk__55807_55812 = G__55829;
count__55808_55813 = G__55830;
i__55809_55814 = G__55831;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__55836_55840 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55837_55841 = null;var count__55838_55842 = (0);var i__55839_55843 = (0);while(true){
if((i__55839_55843 < count__55838_55842))
{var node_55844 = cljs.core._nth.call(null,chunk__55837_55841,i__55839_55843);goog.dom.setTextContent(node_55844,value);
{
var G__55845 = seq__55836_55840;
var G__55846 = chunk__55837_55841;
var G__55847 = count__55838_55842;
var G__55848 = (i__55839_55843 + (1));
seq__55836_55840 = G__55845;
chunk__55837_55841 = G__55846;
count__55838_55842 = G__55847;
i__55839_55843 = G__55848;
continue;
}
} else
{var temp__4126__auto___55849 = cljs.core.seq.call(null,seq__55836_55840);if(temp__4126__auto___55849)
{var seq__55836_55850__$1 = temp__4126__auto___55849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55836_55850__$1))
{var c__4299__auto___55851 = cljs.core.chunk_first.call(null,seq__55836_55850__$1);{
var G__55852 = cljs.core.chunk_rest.call(null,seq__55836_55850__$1);
var G__55853 = c__4299__auto___55851;
var G__55854 = cljs.core.count.call(null,c__4299__auto___55851);
var G__55855 = (0);
seq__55836_55840 = G__55852;
chunk__55837_55841 = G__55853;
count__55838_55842 = G__55854;
i__55839_55843 = G__55855;
continue;
}
} else
{var node_55856 = cljs.core.first.call(null,seq__55836_55850__$1);goog.dom.setTextContent(node_55856,value);
{
var G__55857 = cljs.core.next.call(null,seq__55836_55850__$1);
var G__55858 = null;
var G__55859 = (0);
var G__55860 = (0);
seq__55836_55840 = G__55857;
chunk__55837_55841 = G__55858;
count__55838_55842 = G__55859;
i__55839_55843 = G__55860;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__55865_55869 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55866_55870 = null;var count__55867_55871 = (0);var i__55868_55872 = (0);while(true){
if((i__55868_55872 < count__55867_55871))
{var node_55873 = cljs.core._nth.call(null,chunk__55866_55870,i__55868_55872);goog.dom.forms.setValue(node_55873,value);
{
var G__55874 = seq__55865_55869;
var G__55875 = chunk__55866_55870;
var G__55876 = count__55867_55871;
var G__55877 = (i__55868_55872 + (1));
seq__55865_55869 = G__55874;
chunk__55866_55870 = G__55875;
count__55867_55871 = G__55876;
i__55868_55872 = G__55877;
continue;
}
} else
{var temp__4126__auto___55878 = cljs.core.seq.call(null,seq__55865_55869);if(temp__4126__auto___55878)
{var seq__55865_55879__$1 = temp__4126__auto___55878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55865_55879__$1))
{var c__4299__auto___55880 = cljs.core.chunk_first.call(null,seq__55865_55879__$1);{
var G__55881 = cljs.core.chunk_rest.call(null,seq__55865_55879__$1);
var G__55882 = c__4299__auto___55880;
var G__55883 = cljs.core.count.call(null,c__4299__auto___55880);
var G__55884 = (0);
seq__55865_55869 = G__55881;
chunk__55866_55870 = G__55882;
count__55867_55871 = G__55883;
i__55868_55872 = G__55884;
continue;
}
} else
{var node_55885 = cljs.core.first.call(null,seq__55865_55879__$1);goog.dom.forms.setValue(node_55885,value);
{
var G__55886 = cljs.core.next.call(null,seq__55865_55879__$1);
var G__55887 = null;
var G__55888 = (0);
var G__55889 = (0);
seq__55865_55869 = G__55886;
chunk__55866_55870 = G__55887;
count__55867_55871 = G__55888;
i__55868_55872 = G__55889;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_55900 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__55896_55901 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55897_55902 = null;var count__55898_55903 = (0);var i__55899_55904 = (0);while(true){
if((i__55899_55904 < count__55898_55903))
{var node_55905 = cljs.core._nth.call(null,chunk__55897_55902,i__55899_55904);node_55905.innerHTML = value_55900;
{
var G__55906 = seq__55896_55901;
var G__55907 = chunk__55897_55902;
var G__55908 = count__55898_55903;
var G__55909 = (i__55899_55904 + (1));
seq__55896_55901 = G__55906;
chunk__55897_55902 = G__55907;
count__55898_55903 = G__55908;
i__55899_55904 = G__55909;
continue;
}
} else
{var temp__4126__auto___55910 = cljs.core.seq.call(null,seq__55896_55901);if(temp__4126__auto___55910)
{var seq__55896_55911__$1 = temp__4126__auto___55910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55896_55911__$1))
{var c__4299__auto___55912 = cljs.core.chunk_first.call(null,seq__55896_55911__$1);{
var G__55913 = cljs.core.chunk_rest.call(null,seq__55896_55911__$1);
var G__55914 = c__4299__auto___55912;
var G__55915 = cljs.core.count.call(null,c__4299__auto___55912);
var G__55916 = (0);
seq__55896_55901 = G__55913;
chunk__55897_55902 = G__55914;
count__55898_55903 = G__55915;
i__55899_55904 = G__55916;
continue;
}
} else
{var node_55917 = cljs.core.first.call(null,seq__55896_55911__$1);node_55917.innerHTML = value_55900;
{
var G__55918 = cljs.core.next.call(null,seq__55896_55911__$1);
var G__55919 = null;
var G__55920 = (0);
var G__55921 = (0);
seq__55896_55901 = G__55918;
chunk__55897_55902 = G__55919;
count__55898_55903 = G__55920;
i__55899_55904 = G__55921;
continue;
}
}
} else
{}
}
break;
}
}catch (e55895){if((e55895 instanceof Error))
{var e_55922 = e55895;domina.replace_children_BANG_.call(null,content,value_55900);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e55895;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__55929_55933 = cljs.core.seq.call(null,children);var chunk__55930_55934 = null;var count__55931_55935 = (0);var i__55932_55936 = (0);while(true){
if((i__55932_55936 < count__55931_55935))
{var child_55937 = cljs.core._nth.call(null,chunk__55930_55934,i__55932_55936);frag.appendChild(child_55937);
{
var G__55938 = seq__55929_55933;
var G__55939 = chunk__55930_55934;
var G__55940 = count__55931_55935;
var G__55941 = (i__55932_55936 + (1));
seq__55929_55933 = G__55938;
chunk__55930_55934 = G__55939;
count__55931_55935 = G__55940;
i__55932_55936 = G__55941;
continue;
}
} else
{var temp__4126__auto___55942 = cljs.core.seq.call(null,seq__55929_55933);if(temp__4126__auto___55942)
{var seq__55929_55943__$1 = temp__4126__auto___55942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55929_55943__$1))
{var c__4299__auto___55944 = cljs.core.chunk_first.call(null,seq__55929_55943__$1);{
var G__55945 = cljs.core.chunk_rest.call(null,seq__55929_55943__$1);
var G__55946 = c__4299__auto___55944;
var G__55947 = cljs.core.count.call(null,c__4299__auto___55944);
var G__55948 = (0);
seq__55929_55933 = G__55945;
chunk__55930_55934 = G__55946;
count__55931_55935 = G__55947;
i__55932_55936 = G__55948;
continue;
}
} else
{var child_55949 = cljs.core.first.call(null,seq__55929_55943__$1);frag.appendChild(child_55949);
{
var G__55950 = cljs.core.next.call(null,seq__55929_55943__$1);
var G__55951 = null;
var G__55952 = (0);
var G__55953 = (0);
seq__55929_55933 = G__55950;
chunk__55930_55934 = G__55951;
count__55931_55935 = G__55952;
i__55932_55936 = G__55953;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__55923_SHARP_,p2__55924_SHARP_){return f.call(null,p1__55923_SHARP_,p2__55924_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__55955 = list_thing;if(G__55955)
{var bit__4193__auto__ = (G__55955.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__55955.cljs$core$ISeqable$))
{return true;
} else
{if((!G__55955.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__55955);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__55955);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__55956 = content;if(G__55956)
{var bit__4193__auto__ = (G__55956.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__55956.cljs$core$ISeqable$))
{return true;
} else
{if((!G__55956.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__55956);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__55956);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__55957 = content;if(G__55957)
{var bit__4193__auto__ = (G__55957.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__55957.cljs$core$ISeqable$))
{return true;
} else
{if((!G__55957.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__55957);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__55957);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map