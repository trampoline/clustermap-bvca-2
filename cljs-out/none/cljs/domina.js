// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_16516 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16517 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16518 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16517,table_section_wrapper_16517,opt_wrapper_16516,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16518,table_section_wrapper_16517,cell_wrapper_16518,opt_wrapper_16516,table_section_wrapper_16517,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16517]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16523 = cljs.core.seq.call(null,tbody);var chunk__16524 = null;var count__16525 = 0;var i__16526 = 0;while(true){
if((i__16526 < count__16525))
{var child = cljs.core._nth.call(null,chunk__16524,i__16526);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16527 = seq__16523;
var G__16528 = chunk__16524;
var G__16529 = count__16525;
var G__16530 = (i__16526 + 1);
seq__16523 = G__16527;
chunk__16524 = G__16528;
count__16525 = G__16529;
i__16526 = G__16530;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16523);if(temp__4092__auto__)
{var seq__16523__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16523__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16523__$1);{
var G__16531 = cljs.core.chunk_rest.call(null,seq__16523__$1);
var G__16532 = c__4148__auto__;
var G__16533 = cljs.core.count.call(null,c__4148__auto__);
var G__16534 = 0;
seq__16523 = G__16531;
chunk__16524 = G__16532;
count__16525 = G__16533;
i__16526 = G__16534;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16523__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16535 = cljs.core.next.call(null,seq__16523__$1);
var G__16536 = null;
var G__16537 = 0;
var G__16538 = 0;
seq__16523 = G__16535;
chunk__16524 = G__16536;
count__16525 = G__16537;
i__16526 = G__16538;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16540 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16540,0,null);var start_wrap = cljs.core.nth.call(null,vec__16540,1,null);var end_wrap = cljs.core.nth.call(null,vec__16540,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16541 = wrapper.lastChild;
var G__16542 = (level - 1);
wrapper = G__16541;
level = G__16542;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj16544 = {};return obj16544;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__16545){
var mesg = cljs.core.seq(arglist__16545);
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
log.cljs$lang$applyTo = (function (arglist__16546){
var mesg = cljs.core.seq(arglist__16546);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16547){
var contents = cljs.core.seq(arglist__16547);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16548_SHARP_){return p1__16548_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16549_SHARP_,p2__16550_SHARP_){return goog.dom.insertChildAt(p1__16549_SHARP_,p2__16550_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16552_SHARP_,p2__16551_SHARP_){return goog.dom.insertSiblingBefore(p2__16551_SHARP_,p1__16552_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16554_SHARP_,p2__16553_SHARP_){return goog.dom.insertSiblingAfter(p2__16553_SHARP_,p1__16554_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16556_SHARP_,p2__16555_SHARP_){return goog.dom.replaceNode(p2__16555_SHARP_,p1__16556_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16561_16565 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16562_16566 = null;var count__16563_16567 = 0;var i__16564_16568 = 0;while(true){
if((i__16564_16568 < count__16563_16567))
{var n_16569 = cljs.core._nth.call(null,chunk__16562_16566,i__16564_16568);goog.style.setStyle(n_16569,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16570 = seq__16561_16565;
var G__16571 = chunk__16562_16566;
var G__16572 = count__16563_16567;
var G__16573 = (i__16564_16568 + 1);
seq__16561_16565 = G__16570;
chunk__16562_16566 = G__16571;
count__16563_16567 = G__16572;
i__16564_16568 = G__16573;
continue;
}
} else
{var temp__4092__auto___16574 = cljs.core.seq.call(null,seq__16561_16565);if(temp__4092__auto___16574)
{var seq__16561_16575__$1 = temp__4092__auto___16574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16561_16575__$1))
{var c__4148__auto___16576 = cljs.core.chunk_first.call(null,seq__16561_16575__$1);{
var G__16577 = cljs.core.chunk_rest.call(null,seq__16561_16575__$1);
var G__16578 = c__4148__auto___16576;
var G__16579 = cljs.core.count.call(null,c__4148__auto___16576);
var G__16580 = 0;
seq__16561_16565 = G__16577;
chunk__16562_16566 = G__16578;
count__16563_16567 = G__16579;
i__16564_16568 = G__16580;
continue;
}
} else
{var n_16581 = cljs.core.first.call(null,seq__16561_16575__$1);goog.style.setStyle(n_16581,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16582 = cljs.core.next.call(null,seq__16561_16575__$1);
var G__16583 = null;
var G__16584 = 0;
var G__16585 = 0;
seq__16561_16565 = G__16582;
chunk__16562_16566 = G__16583;
count__16563_16567 = G__16584;
i__16564_16568 = G__16585;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16586){
var content = cljs.core.first(arglist__16586);
arglist__16586 = cljs.core.next(arglist__16586);
var name = cljs.core.first(arglist__16586);
var value = cljs.core.rest(arglist__16586);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16591_16595 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16592_16596 = null;var count__16593_16597 = 0;var i__16594_16598 = 0;while(true){
if((i__16594_16598 < count__16593_16597))
{var n_16599 = cljs.core._nth.call(null,chunk__16592_16596,i__16594_16598);n_16599.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16600 = seq__16591_16595;
var G__16601 = chunk__16592_16596;
var G__16602 = count__16593_16597;
var G__16603 = (i__16594_16598 + 1);
seq__16591_16595 = G__16600;
chunk__16592_16596 = G__16601;
count__16593_16597 = G__16602;
i__16594_16598 = G__16603;
continue;
}
} else
{var temp__4092__auto___16604 = cljs.core.seq.call(null,seq__16591_16595);if(temp__4092__auto___16604)
{var seq__16591_16605__$1 = temp__4092__auto___16604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16591_16605__$1))
{var c__4148__auto___16606 = cljs.core.chunk_first.call(null,seq__16591_16605__$1);{
var G__16607 = cljs.core.chunk_rest.call(null,seq__16591_16605__$1);
var G__16608 = c__4148__auto___16606;
var G__16609 = cljs.core.count.call(null,c__4148__auto___16606);
var G__16610 = 0;
seq__16591_16595 = G__16607;
chunk__16592_16596 = G__16608;
count__16593_16597 = G__16609;
i__16594_16598 = G__16610;
continue;
}
} else
{var n_16611 = cljs.core.first.call(null,seq__16591_16605__$1);n_16611.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16612 = cljs.core.next.call(null,seq__16591_16605__$1);
var G__16613 = null;
var G__16614 = 0;
var G__16615 = 0;
seq__16591_16595 = G__16612;
chunk__16592_16596 = G__16613;
count__16593_16597 = G__16614;
i__16594_16598 = G__16615;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16616){
var content = cljs.core.first(arglist__16616);
arglist__16616 = cljs.core.next(arglist__16616);
var name = cljs.core.first(arglist__16616);
var value = cljs.core.rest(arglist__16616);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16621_16625 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16622_16626 = null;var count__16623_16627 = 0;var i__16624_16628 = 0;while(true){
if((i__16624_16628 < count__16623_16627))
{var n_16629 = cljs.core._nth.call(null,chunk__16622_16626,i__16624_16628);n_16629.removeAttribute(cljs.core.name.call(null,name));
{
var G__16630 = seq__16621_16625;
var G__16631 = chunk__16622_16626;
var G__16632 = count__16623_16627;
var G__16633 = (i__16624_16628 + 1);
seq__16621_16625 = G__16630;
chunk__16622_16626 = G__16631;
count__16623_16627 = G__16632;
i__16624_16628 = G__16633;
continue;
}
} else
{var temp__4092__auto___16634 = cljs.core.seq.call(null,seq__16621_16625);if(temp__4092__auto___16634)
{var seq__16621_16635__$1 = temp__4092__auto___16634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16621_16635__$1))
{var c__4148__auto___16636 = cljs.core.chunk_first.call(null,seq__16621_16635__$1);{
var G__16637 = cljs.core.chunk_rest.call(null,seq__16621_16635__$1);
var G__16638 = c__4148__auto___16636;
var G__16639 = cljs.core.count.call(null,c__4148__auto___16636);
var G__16640 = 0;
seq__16621_16625 = G__16637;
chunk__16622_16626 = G__16638;
count__16623_16627 = G__16639;
i__16624_16628 = G__16640;
continue;
}
} else
{var n_16641 = cljs.core.first.call(null,seq__16621_16635__$1);n_16641.removeAttribute(cljs.core.name.call(null,name));
{
var G__16642 = cljs.core.next.call(null,seq__16621_16635__$1);
var G__16643 = null;
var G__16644 = 0;
var G__16645 = 0;
seq__16621_16625 = G__16642;
chunk__16622_16626 = G__16643;
count__16623_16627 = G__16644;
i__16624_16628 = G__16645;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16647 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16647,0,null);var v = cljs.core.nth.call(null,vec__16647,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16648_SHARP_){var attr = attrs__$1.item(p1__16648_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16655_16661 = cljs.core.seq.call(null,styles);var chunk__16656_16662 = null;var count__16657_16663 = 0;var i__16658_16664 = 0;while(true){
if((i__16658_16664 < count__16657_16663))
{var vec__16659_16665 = cljs.core._nth.call(null,chunk__16656_16662,i__16658_16664);var name_16666 = cljs.core.nth.call(null,vec__16659_16665,0,null);var value_16667 = cljs.core.nth.call(null,vec__16659_16665,1,null);domina.set_style_BANG_.call(null,content,name_16666,value_16667);
{
var G__16668 = seq__16655_16661;
var G__16669 = chunk__16656_16662;
var G__16670 = count__16657_16663;
var G__16671 = (i__16658_16664 + 1);
seq__16655_16661 = G__16668;
chunk__16656_16662 = G__16669;
count__16657_16663 = G__16670;
i__16658_16664 = G__16671;
continue;
}
} else
{var temp__4092__auto___16672 = cljs.core.seq.call(null,seq__16655_16661);if(temp__4092__auto___16672)
{var seq__16655_16673__$1 = temp__4092__auto___16672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16655_16673__$1))
{var c__4148__auto___16674 = cljs.core.chunk_first.call(null,seq__16655_16673__$1);{
var G__16675 = cljs.core.chunk_rest.call(null,seq__16655_16673__$1);
var G__16676 = c__4148__auto___16674;
var G__16677 = cljs.core.count.call(null,c__4148__auto___16674);
var G__16678 = 0;
seq__16655_16661 = G__16675;
chunk__16656_16662 = G__16676;
count__16657_16663 = G__16677;
i__16658_16664 = G__16678;
continue;
}
} else
{var vec__16660_16679 = cljs.core.first.call(null,seq__16655_16673__$1);var name_16680 = cljs.core.nth.call(null,vec__16660_16679,0,null);var value_16681 = cljs.core.nth.call(null,vec__16660_16679,1,null);domina.set_style_BANG_.call(null,content,name_16680,value_16681);
{
var G__16682 = cljs.core.next.call(null,seq__16655_16673__$1);
var G__16683 = null;
var G__16684 = 0;
var G__16685 = 0;
seq__16655_16661 = G__16682;
chunk__16656_16662 = G__16683;
count__16657_16663 = G__16684;
i__16658_16664 = G__16685;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16692_16698 = cljs.core.seq.call(null,attrs);var chunk__16693_16699 = null;var count__16694_16700 = 0;var i__16695_16701 = 0;while(true){
if((i__16695_16701 < count__16694_16700))
{var vec__16696_16702 = cljs.core._nth.call(null,chunk__16693_16699,i__16695_16701);var name_16703 = cljs.core.nth.call(null,vec__16696_16702,0,null);var value_16704 = cljs.core.nth.call(null,vec__16696_16702,1,null);domina.set_attr_BANG_.call(null,content,name_16703,value_16704);
{
var G__16705 = seq__16692_16698;
var G__16706 = chunk__16693_16699;
var G__16707 = count__16694_16700;
var G__16708 = (i__16695_16701 + 1);
seq__16692_16698 = G__16705;
chunk__16693_16699 = G__16706;
count__16694_16700 = G__16707;
i__16695_16701 = G__16708;
continue;
}
} else
{var temp__4092__auto___16709 = cljs.core.seq.call(null,seq__16692_16698);if(temp__4092__auto___16709)
{var seq__16692_16710__$1 = temp__4092__auto___16709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16692_16710__$1))
{var c__4148__auto___16711 = cljs.core.chunk_first.call(null,seq__16692_16710__$1);{
var G__16712 = cljs.core.chunk_rest.call(null,seq__16692_16710__$1);
var G__16713 = c__4148__auto___16711;
var G__16714 = cljs.core.count.call(null,c__4148__auto___16711);
var G__16715 = 0;
seq__16692_16698 = G__16712;
chunk__16693_16699 = G__16713;
count__16694_16700 = G__16714;
i__16695_16701 = G__16715;
continue;
}
} else
{var vec__16697_16716 = cljs.core.first.call(null,seq__16692_16710__$1);var name_16717 = cljs.core.nth.call(null,vec__16697_16716,0,null);var value_16718 = cljs.core.nth.call(null,vec__16697_16716,1,null);domina.set_attr_BANG_.call(null,content,name_16717,value_16718);
{
var G__16719 = cljs.core.next.call(null,seq__16692_16710__$1);
var G__16720 = null;
var G__16721 = 0;
var G__16722 = 0;
seq__16692_16698 = G__16719;
chunk__16693_16699 = G__16720;
count__16694_16700 = G__16721;
i__16695_16701 = G__16722;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16727_16731 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16728_16732 = null;var count__16729_16733 = 0;var i__16730_16734 = 0;while(true){
if((i__16730_16734 < count__16729_16733))
{var node_16735 = cljs.core._nth.call(null,chunk__16728_16732,i__16730_16734);goog.dom.classes.add(node_16735,class$);
{
var G__16736 = seq__16727_16731;
var G__16737 = chunk__16728_16732;
var G__16738 = count__16729_16733;
var G__16739 = (i__16730_16734 + 1);
seq__16727_16731 = G__16736;
chunk__16728_16732 = G__16737;
count__16729_16733 = G__16738;
i__16730_16734 = G__16739;
continue;
}
} else
{var temp__4092__auto___16740 = cljs.core.seq.call(null,seq__16727_16731);if(temp__4092__auto___16740)
{var seq__16727_16741__$1 = temp__4092__auto___16740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16727_16741__$1))
{var c__4148__auto___16742 = cljs.core.chunk_first.call(null,seq__16727_16741__$1);{
var G__16743 = cljs.core.chunk_rest.call(null,seq__16727_16741__$1);
var G__16744 = c__4148__auto___16742;
var G__16745 = cljs.core.count.call(null,c__4148__auto___16742);
var G__16746 = 0;
seq__16727_16731 = G__16743;
chunk__16728_16732 = G__16744;
count__16729_16733 = G__16745;
i__16730_16734 = G__16746;
continue;
}
} else
{var node_16747 = cljs.core.first.call(null,seq__16727_16741__$1);goog.dom.classes.add(node_16747,class$);
{
var G__16748 = cljs.core.next.call(null,seq__16727_16741__$1);
var G__16749 = null;
var G__16750 = 0;
var G__16751 = 0;
seq__16727_16731 = G__16748;
chunk__16728_16732 = G__16749;
count__16729_16733 = G__16750;
i__16730_16734 = G__16751;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16756_16760 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16757_16761 = null;var count__16758_16762 = 0;var i__16759_16763 = 0;while(true){
if((i__16759_16763 < count__16758_16762))
{var node_16764 = cljs.core._nth.call(null,chunk__16757_16761,i__16759_16763);goog.dom.classes.remove(node_16764,class$);
{
var G__16765 = seq__16756_16760;
var G__16766 = chunk__16757_16761;
var G__16767 = count__16758_16762;
var G__16768 = (i__16759_16763 + 1);
seq__16756_16760 = G__16765;
chunk__16757_16761 = G__16766;
count__16758_16762 = G__16767;
i__16759_16763 = G__16768;
continue;
}
} else
{var temp__4092__auto___16769 = cljs.core.seq.call(null,seq__16756_16760);if(temp__4092__auto___16769)
{var seq__16756_16770__$1 = temp__4092__auto___16769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16756_16770__$1))
{var c__4148__auto___16771 = cljs.core.chunk_first.call(null,seq__16756_16770__$1);{
var G__16772 = cljs.core.chunk_rest.call(null,seq__16756_16770__$1);
var G__16773 = c__4148__auto___16771;
var G__16774 = cljs.core.count.call(null,c__4148__auto___16771);
var G__16775 = 0;
seq__16756_16760 = G__16772;
chunk__16757_16761 = G__16773;
count__16758_16762 = G__16774;
i__16759_16763 = G__16775;
continue;
}
} else
{var node_16776 = cljs.core.first.call(null,seq__16756_16770__$1);goog.dom.classes.remove(node_16776,class$);
{
var G__16777 = cljs.core.next.call(null,seq__16756_16770__$1);
var G__16778 = null;
var G__16779 = 0;
var G__16780 = 0;
seq__16756_16760 = G__16777;
chunk__16757_16761 = G__16778;
count__16758_16762 = G__16779;
i__16759_16763 = G__16780;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16785_16789 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16786_16790 = null;var count__16787_16791 = 0;var i__16788_16792 = 0;while(true){
if((i__16788_16792 < count__16787_16791))
{var node_16793 = cljs.core._nth.call(null,chunk__16786_16790,i__16788_16792);goog.dom.classes.toggle(node_16793,class$);
{
var G__16794 = seq__16785_16789;
var G__16795 = chunk__16786_16790;
var G__16796 = count__16787_16791;
var G__16797 = (i__16788_16792 + 1);
seq__16785_16789 = G__16794;
chunk__16786_16790 = G__16795;
count__16787_16791 = G__16796;
i__16788_16792 = G__16797;
continue;
}
} else
{var temp__4092__auto___16798 = cljs.core.seq.call(null,seq__16785_16789);if(temp__4092__auto___16798)
{var seq__16785_16799__$1 = temp__4092__auto___16798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16785_16799__$1))
{var c__4148__auto___16800 = cljs.core.chunk_first.call(null,seq__16785_16799__$1);{
var G__16801 = cljs.core.chunk_rest.call(null,seq__16785_16799__$1);
var G__16802 = c__4148__auto___16800;
var G__16803 = cljs.core.count.call(null,c__4148__auto___16800);
var G__16804 = 0;
seq__16785_16789 = G__16801;
chunk__16786_16790 = G__16802;
count__16787_16791 = G__16803;
i__16788_16792 = G__16804;
continue;
}
} else
{var node_16805 = cljs.core.first.call(null,seq__16785_16799__$1);goog.dom.classes.toggle(node_16805,class$);
{
var G__16806 = cljs.core.next.call(null,seq__16785_16799__$1);
var G__16807 = null;
var G__16808 = 0;
var G__16809 = 0;
seq__16785_16789 = G__16806;
chunk__16786_16790 = G__16807;
count__16787_16791 = G__16808;
i__16788_16792 = G__16809;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16818__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16814_16819 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16815_16820 = null;var count__16816_16821 = 0;var i__16817_16822 = 0;while(true){
if((i__16817_16822 < count__16816_16821))
{var node_16823 = cljs.core._nth.call(null,chunk__16815_16820,i__16817_16822);goog.dom.classes.set(node_16823,classes_16818__$1);
{
var G__16824 = seq__16814_16819;
var G__16825 = chunk__16815_16820;
var G__16826 = count__16816_16821;
var G__16827 = (i__16817_16822 + 1);
seq__16814_16819 = G__16824;
chunk__16815_16820 = G__16825;
count__16816_16821 = G__16826;
i__16817_16822 = G__16827;
continue;
}
} else
{var temp__4092__auto___16828 = cljs.core.seq.call(null,seq__16814_16819);if(temp__4092__auto___16828)
{var seq__16814_16829__$1 = temp__4092__auto___16828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16814_16829__$1))
{var c__4148__auto___16830 = cljs.core.chunk_first.call(null,seq__16814_16829__$1);{
var G__16831 = cljs.core.chunk_rest.call(null,seq__16814_16829__$1);
var G__16832 = c__4148__auto___16830;
var G__16833 = cljs.core.count.call(null,c__4148__auto___16830);
var G__16834 = 0;
seq__16814_16819 = G__16831;
chunk__16815_16820 = G__16832;
count__16816_16821 = G__16833;
i__16817_16822 = G__16834;
continue;
}
} else
{var node_16835 = cljs.core.first.call(null,seq__16814_16829__$1);goog.dom.classes.set(node_16835,classes_16818__$1);
{
var G__16836 = cljs.core.next.call(null,seq__16814_16829__$1);
var G__16837 = null;
var G__16838 = 0;
var G__16839 = 0;
seq__16814_16819 = G__16836;
chunk__16815_16820 = G__16837;
count__16816_16821 = G__16838;
i__16817_16822 = G__16839;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16844_16848 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16845_16849 = null;var count__16846_16850 = 0;var i__16847_16851 = 0;while(true){
if((i__16847_16851 < count__16846_16850))
{var node_16852 = cljs.core._nth.call(null,chunk__16845_16849,i__16847_16851);goog.dom.setTextContent(node_16852,value);
{
var G__16853 = seq__16844_16848;
var G__16854 = chunk__16845_16849;
var G__16855 = count__16846_16850;
var G__16856 = (i__16847_16851 + 1);
seq__16844_16848 = G__16853;
chunk__16845_16849 = G__16854;
count__16846_16850 = G__16855;
i__16847_16851 = G__16856;
continue;
}
} else
{var temp__4092__auto___16857 = cljs.core.seq.call(null,seq__16844_16848);if(temp__4092__auto___16857)
{var seq__16844_16858__$1 = temp__4092__auto___16857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16844_16858__$1))
{var c__4148__auto___16859 = cljs.core.chunk_first.call(null,seq__16844_16858__$1);{
var G__16860 = cljs.core.chunk_rest.call(null,seq__16844_16858__$1);
var G__16861 = c__4148__auto___16859;
var G__16862 = cljs.core.count.call(null,c__4148__auto___16859);
var G__16863 = 0;
seq__16844_16848 = G__16860;
chunk__16845_16849 = G__16861;
count__16846_16850 = G__16862;
i__16847_16851 = G__16863;
continue;
}
} else
{var node_16864 = cljs.core.first.call(null,seq__16844_16858__$1);goog.dom.setTextContent(node_16864,value);
{
var G__16865 = cljs.core.next.call(null,seq__16844_16858__$1);
var G__16866 = null;
var G__16867 = 0;
var G__16868 = 0;
seq__16844_16848 = G__16865;
chunk__16845_16849 = G__16866;
count__16846_16850 = G__16867;
i__16847_16851 = G__16868;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16873_16877 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16874_16878 = null;var count__16875_16879 = 0;var i__16876_16880 = 0;while(true){
if((i__16876_16880 < count__16875_16879))
{var node_16881 = cljs.core._nth.call(null,chunk__16874_16878,i__16876_16880);goog.dom.forms.setValue(node_16881,value);
{
var G__16882 = seq__16873_16877;
var G__16883 = chunk__16874_16878;
var G__16884 = count__16875_16879;
var G__16885 = (i__16876_16880 + 1);
seq__16873_16877 = G__16882;
chunk__16874_16878 = G__16883;
count__16875_16879 = G__16884;
i__16876_16880 = G__16885;
continue;
}
} else
{var temp__4092__auto___16886 = cljs.core.seq.call(null,seq__16873_16877);if(temp__4092__auto___16886)
{var seq__16873_16887__$1 = temp__4092__auto___16886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16873_16887__$1))
{var c__4148__auto___16888 = cljs.core.chunk_first.call(null,seq__16873_16887__$1);{
var G__16889 = cljs.core.chunk_rest.call(null,seq__16873_16887__$1);
var G__16890 = c__4148__auto___16888;
var G__16891 = cljs.core.count.call(null,c__4148__auto___16888);
var G__16892 = 0;
seq__16873_16877 = G__16889;
chunk__16874_16878 = G__16890;
count__16875_16879 = G__16891;
i__16876_16880 = G__16892;
continue;
}
} else
{var node_16893 = cljs.core.first.call(null,seq__16873_16887__$1);goog.dom.forms.setValue(node_16893,value);
{
var G__16894 = cljs.core.next.call(null,seq__16873_16887__$1);
var G__16895 = null;
var G__16896 = 0;
var G__16897 = 0;
seq__16873_16877 = G__16894;
chunk__16874_16878 = G__16895;
count__16875_16879 = G__16896;
i__16876_16880 = G__16897;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_16908 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16904_16909 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16905_16910 = null;var count__16906_16911 = 0;var i__16907_16912 = 0;while(true){
if((i__16907_16912 < count__16906_16911))
{var node_16913 = cljs.core._nth.call(null,chunk__16905_16910,i__16907_16912);node_16913.innerHTML = value_16908;
{
var G__16914 = seq__16904_16909;
var G__16915 = chunk__16905_16910;
var G__16916 = count__16906_16911;
var G__16917 = (i__16907_16912 + 1);
seq__16904_16909 = G__16914;
chunk__16905_16910 = G__16915;
count__16906_16911 = G__16916;
i__16907_16912 = G__16917;
continue;
}
} else
{var temp__4092__auto___16918 = cljs.core.seq.call(null,seq__16904_16909);if(temp__4092__auto___16918)
{var seq__16904_16919__$1 = temp__4092__auto___16918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16904_16919__$1))
{var c__4148__auto___16920 = cljs.core.chunk_first.call(null,seq__16904_16919__$1);{
var G__16921 = cljs.core.chunk_rest.call(null,seq__16904_16919__$1);
var G__16922 = c__4148__auto___16920;
var G__16923 = cljs.core.count.call(null,c__4148__auto___16920);
var G__16924 = 0;
seq__16904_16909 = G__16921;
chunk__16905_16910 = G__16922;
count__16906_16911 = G__16923;
i__16907_16912 = G__16924;
continue;
}
} else
{var node_16925 = cljs.core.first.call(null,seq__16904_16919__$1);node_16925.innerHTML = value_16908;
{
var G__16926 = cljs.core.next.call(null,seq__16904_16919__$1);
var G__16927 = null;
var G__16928 = 0;
var G__16929 = 0;
seq__16904_16909 = G__16926;
chunk__16905_16910 = G__16927;
count__16906_16911 = G__16928;
i__16907_16912 = G__16929;
continue;
}
}
} else
{}
}
break;
}
}catch (e16903){if((e16903 instanceof Error))
{var e_16930 = e16903;domina.replace_children_BANG_.call(null,content,value_16908);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16903;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16937_16941 = cljs.core.seq.call(null,children);var chunk__16938_16942 = null;var count__16939_16943 = 0;var i__16940_16944 = 0;while(true){
if((i__16940_16944 < count__16939_16943))
{var child_16945 = cljs.core._nth.call(null,chunk__16938_16942,i__16940_16944);frag.appendChild(child_16945);
{
var G__16946 = seq__16937_16941;
var G__16947 = chunk__16938_16942;
var G__16948 = count__16939_16943;
var G__16949 = (i__16940_16944 + 1);
seq__16937_16941 = G__16946;
chunk__16938_16942 = G__16947;
count__16939_16943 = G__16948;
i__16940_16944 = G__16949;
continue;
}
} else
{var temp__4092__auto___16950 = cljs.core.seq.call(null,seq__16937_16941);if(temp__4092__auto___16950)
{var seq__16937_16951__$1 = temp__4092__auto___16950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16937_16951__$1))
{var c__4148__auto___16952 = cljs.core.chunk_first.call(null,seq__16937_16951__$1);{
var G__16953 = cljs.core.chunk_rest.call(null,seq__16937_16951__$1);
var G__16954 = c__4148__auto___16952;
var G__16955 = cljs.core.count.call(null,c__4148__auto___16952);
var G__16956 = 0;
seq__16937_16941 = G__16953;
chunk__16938_16942 = G__16954;
count__16939_16943 = G__16955;
i__16940_16944 = G__16956;
continue;
}
} else
{var child_16957 = cljs.core.first.call(null,seq__16937_16951__$1);frag.appendChild(child_16957);
{
var G__16958 = cljs.core.next.call(null,seq__16937_16951__$1);
var G__16959 = null;
var G__16960 = 0;
var G__16961 = 0;
seq__16937_16941 = G__16958;
chunk__16938_16942 = G__16959;
count__16939_16943 = G__16960;
i__16940_16944 = G__16961;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16931_SHARP_,p2__16932_SHARP_){return f.call(null,p1__16931_SHARP_,p2__16932_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__16963 = list_thing;if(G__16963)
{var bit__4050__auto__ = (G__16963.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16963.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16963.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16963);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16963);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__16964 = content;if(G__16964)
{var bit__4050__auto__ = (G__16964.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16964.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16964.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16964);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16964);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__16965 = content;if(G__16965)
{var bit__4050__auto__ = (G__16965.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16965.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16965.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16965);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16965);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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