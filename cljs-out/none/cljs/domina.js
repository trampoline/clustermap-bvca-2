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
var opt_wrapper_16526 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16527 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16528 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16527,table_section_wrapper_16527,opt_wrapper_16526,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16528,table_section_wrapper_16527,cell_wrapper_16528,opt_wrapper_16526,table_section_wrapper_16527,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16527]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16533 = cljs.core.seq.call(null,tbody);var chunk__16534 = null;var count__16535 = 0;var i__16536 = 0;while(true){
if((i__16536 < count__16535))
{var child = cljs.core._nth.call(null,chunk__16534,i__16536);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16537 = seq__16533;
var G__16538 = chunk__16534;
var G__16539 = count__16535;
var G__16540 = (i__16536 + 1);
seq__16533 = G__16537;
chunk__16534 = G__16538;
count__16535 = G__16539;
i__16536 = G__16540;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16533);if(temp__4092__auto__)
{var seq__16533__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16533__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16533__$1);{
var G__16541 = cljs.core.chunk_rest.call(null,seq__16533__$1);
var G__16542 = c__4148__auto__;
var G__16543 = cljs.core.count.call(null,c__4148__auto__);
var G__16544 = 0;
seq__16533 = G__16541;
chunk__16534 = G__16542;
count__16535 = G__16543;
i__16536 = G__16544;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16533__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16545 = cljs.core.next.call(null,seq__16533__$1);
var G__16546 = null;
var G__16547 = 0;
var G__16548 = 0;
seq__16533 = G__16545;
chunk__16534 = G__16546;
count__16535 = G__16547;
i__16536 = G__16548;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16550 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16550,0,null);var start_wrap = cljs.core.nth.call(null,vec__16550,1,null);var end_wrap = cljs.core.nth.call(null,vec__16550,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16551 = wrapper.lastChild;
var G__16552 = (level - 1);
wrapper = G__16551;
level = G__16552;
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
domina.DomContent = (function (){var obj16554 = {};return obj16554;
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
log_debug.cljs$lang$applyTo = (function (arglist__16555){
var mesg = cljs.core.seq(arglist__16555);
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
log.cljs$lang$applyTo = (function (arglist__16556){
var mesg = cljs.core.seq(arglist__16556);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16557){
var contents = cljs.core.seq(arglist__16557);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16558_SHARP_){return p1__16558_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16559_SHARP_,p2__16560_SHARP_){return goog.dom.insertChildAt(p1__16559_SHARP_,p2__16560_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16562_SHARP_,p2__16561_SHARP_){return goog.dom.insertSiblingBefore(p2__16561_SHARP_,p1__16562_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16564_SHARP_,p2__16563_SHARP_){return goog.dom.insertSiblingAfter(p2__16563_SHARP_,p1__16564_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16566_SHARP_,p2__16565_SHARP_){return goog.dom.replaceNode(p2__16565_SHARP_,p1__16566_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16571_16575 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16572_16576 = null;var count__16573_16577 = 0;var i__16574_16578 = 0;while(true){
if((i__16574_16578 < count__16573_16577))
{var n_16579 = cljs.core._nth.call(null,chunk__16572_16576,i__16574_16578);goog.style.setStyle(n_16579,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16580 = seq__16571_16575;
var G__16581 = chunk__16572_16576;
var G__16582 = count__16573_16577;
var G__16583 = (i__16574_16578 + 1);
seq__16571_16575 = G__16580;
chunk__16572_16576 = G__16581;
count__16573_16577 = G__16582;
i__16574_16578 = G__16583;
continue;
}
} else
{var temp__4092__auto___16584 = cljs.core.seq.call(null,seq__16571_16575);if(temp__4092__auto___16584)
{var seq__16571_16585__$1 = temp__4092__auto___16584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16571_16585__$1))
{var c__4148__auto___16586 = cljs.core.chunk_first.call(null,seq__16571_16585__$1);{
var G__16587 = cljs.core.chunk_rest.call(null,seq__16571_16585__$1);
var G__16588 = c__4148__auto___16586;
var G__16589 = cljs.core.count.call(null,c__4148__auto___16586);
var G__16590 = 0;
seq__16571_16575 = G__16587;
chunk__16572_16576 = G__16588;
count__16573_16577 = G__16589;
i__16574_16578 = G__16590;
continue;
}
} else
{var n_16591 = cljs.core.first.call(null,seq__16571_16585__$1);goog.style.setStyle(n_16591,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16592 = cljs.core.next.call(null,seq__16571_16585__$1);
var G__16593 = null;
var G__16594 = 0;
var G__16595 = 0;
seq__16571_16575 = G__16592;
chunk__16572_16576 = G__16593;
count__16573_16577 = G__16594;
i__16574_16578 = G__16595;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16596){
var content = cljs.core.first(arglist__16596);
arglist__16596 = cljs.core.next(arglist__16596);
var name = cljs.core.first(arglist__16596);
var value = cljs.core.rest(arglist__16596);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16601_16605 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16602_16606 = null;var count__16603_16607 = 0;var i__16604_16608 = 0;while(true){
if((i__16604_16608 < count__16603_16607))
{var n_16609 = cljs.core._nth.call(null,chunk__16602_16606,i__16604_16608);n_16609.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16610 = seq__16601_16605;
var G__16611 = chunk__16602_16606;
var G__16612 = count__16603_16607;
var G__16613 = (i__16604_16608 + 1);
seq__16601_16605 = G__16610;
chunk__16602_16606 = G__16611;
count__16603_16607 = G__16612;
i__16604_16608 = G__16613;
continue;
}
} else
{var temp__4092__auto___16614 = cljs.core.seq.call(null,seq__16601_16605);if(temp__4092__auto___16614)
{var seq__16601_16615__$1 = temp__4092__auto___16614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16601_16615__$1))
{var c__4148__auto___16616 = cljs.core.chunk_first.call(null,seq__16601_16615__$1);{
var G__16617 = cljs.core.chunk_rest.call(null,seq__16601_16615__$1);
var G__16618 = c__4148__auto___16616;
var G__16619 = cljs.core.count.call(null,c__4148__auto___16616);
var G__16620 = 0;
seq__16601_16605 = G__16617;
chunk__16602_16606 = G__16618;
count__16603_16607 = G__16619;
i__16604_16608 = G__16620;
continue;
}
} else
{var n_16621 = cljs.core.first.call(null,seq__16601_16615__$1);n_16621.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16622 = cljs.core.next.call(null,seq__16601_16615__$1);
var G__16623 = null;
var G__16624 = 0;
var G__16625 = 0;
seq__16601_16605 = G__16622;
chunk__16602_16606 = G__16623;
count__16603_16607 = G__16624;
i__16604_16608 = G__16625;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16626){
var content = cljs.core.first(arglist__16626);
arglist__16626 = cljs.core.next(arglist__16626);
var name = cljs.core.first(arglist__16626);
var value = cljs.core.rest(arglist__16626);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16631_16635 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16632_16636 = null;var count__16633_16637 = 0;var i__16634_16638 = 0;while(true){
if((i__16634_16638 < count__16633_16637))
{var n_16639 = cljs.core._nth.call(null,chunk__16632_16636,i__16634_16638);n_16639.removeAttribute(cljs.core.name.call(null,name));
{
var G__16640 = seq__16631_16635;
var G__16641 = chunk__16632_16636;
var G__16642 = count__16633_16637;
var G__16643 = (i__16634_16638 + 1);
seq__16631_16635 = G__16640;
chunk__16632_16636 = G__16641;
count__16633_16637 = G__16642;
i__16634_16638 = G__16643;
continue;
}
} else
{var temp__4092__auto___16644 = cljs.core.seq.call(null,seq__16631_16635);if(temp__4092__auto___16644)
{var seq__16631_16645__$1 = temp__4092__auto___16644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16631_16645__$1))
{var c__4148__auto___16646 = cljs.core.chunk_first.call(null,seq__16631_16645__$1);{
var G__16647 = cljs.core.chunk_rest.call(null,seq__16631_16645__$1);
var G__16648 = c__4148__auto___16646;
var G__16649 = cljs.core.count.call(null,c__4148__auto___16646);
var G__16650 = 0;
seq__16631_16635 = G__16647;
chunk__16632_16636 = G__16648;
count__16633_16637 = G__16649;
i__16634_16638 = G__16650;
continue;
}
} else
{var n_16651 = cljs.core.first.call(null,seq__16631_16645__$1);n_16651.removeAttribute(cljs.core.name.call(null,name));
{
var G__16652 = cljs.core.next.call(null,seq__16631_16645__$1);
var G__16653 = null;
var G__16654 = 0;
var G__16655 = 0;
seq__16631_16635 = G__16652;
chunk__16632_16636 = G__16653;
count__16633_16637 = G__16654;
i__16634_16638 = G__16655;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16657 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16657,0,null);var v = cljs.core.nth.call(null,vec__16657,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16658_SHARP_){var attr = attrs__$1.item(p1__16658_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16665_16671 = cljs.core.seq.call(null,styles);var chunk__16666_16672 = null;var count__16667_16673 = 0;var i__16668_16674 = 0;while(true){
if((i__16668_16674 < count__16667_16673))
{var vec__16669_16675 = cljs.core._nth.call(null,chunk__16666_16672,i__16668_16674);var name_16676 = cljs.core.nth.call(null,vec__16669_16675,0,null);var value_16677 = cljs.core.nth.call(null,vec__16669_16675,1,null);domina.set_style_BANG_.call(null,content,name_16676,value_16677);
{
var G__16678 = seq__16665_16671;
var G__16679 = chunk__16666_16672;
var G__16680 = count__16667_16673;
var G__16681 = (i__16668_16674 + 1);
seq__16665_16671 = G__16678;
chunk__16666_16672 = G__16679;
count__16667_16673 = G__16680;
i__16668_16674 = G__16681;
continue;
}
} else
{var temp__4092__auto___16682 = cljs.core.seq.call(null,seq__16665_16671);if(temp__4092__auto___16682)
{var seq__16665_16683__$1 = temp__4092__auto___16682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16665_16683__$1))
{var c__4148__auto___16684 = cljs.core.chunk_first.call(null,seq__16665_16683__$1);{
var G__16685 = cljs.core.chunk_rest.call(null,seq__16665_16683__$1);
var G__16686 = c__4148__auto___16684;
var G__16687 = cljs.core.count.call(null,c__4148__auto___16684);
var G__16688 = 0;
seq__16665_16671 = G__16685;
chunk__16666_16672 = G__16686;
count__16667_16673 = G__16687;
i__16668_16674 = G__16688;
continue;
}
} else
{var vec__16670_16689 = cljs.core.first.call(null,seq__16665_16683__$1);var name_16690 = cljs.core.nth.call(null,vec__16670_16689,0,null);var value_16691 = cljs.core.nth.call(null,vec__16670_16689,1,null);domina.set_style_BANG_.call(null,content,name_16690,value_16691);
{
var G__16692 = cljs.core.next.call(null,seq__16665_16683__$1);
var G__16693 = null;
var G__16694 = 0;
var G__16695 = 0;
seq__16665_16671 = G__16692;
chunk__16666_16672 = G__16693;
count__16667_16673 = G__16694;
i__16668_16674 = G__16695;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16702_16708 = cljs.core.seq.call(null,attrs);var chunk__16703_16709 = null;var count__16704_16710 = 0;var i__16705_16711 = 0;while(true){
if((i__16705_16711 < count__16704_16710))
{var vec__16706_16712 = cljs.core._nth.call(null,chunk__16703_16709,i__16705_16711);var name_16713 = cljs.core.nth.call(null,vec__16706_16712,0,null);var value_16714 = cljs.core.nth.call(null,vec__16706_16712,1,null);domina.set_attr_BANG_.call(null,content,name_16713,value_16714);
{
var G__16715 = seq__16702_16708;
var G__16716 = chunk__16703_16709;
var G__16717 = count__16704_16710;
var G__16718 = (i__16705_16711 + 1);
seq__16702_16708 = G__16715;
chunk__16703_16709 = G__16716;
count__16704_16710 = G__16717;
i__16705_16711 = G__16718;
continue;
}
} else
{var temp__4092__auto___16719 = cljs.core.seq.call(null,seq__16702_16708);if(temp__4092__auto___16719)
{var seq__16702_16720__$1 = temp__4092__auto___16719;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16702_16720__$1))
{var c__4148__auto___16721 = cljs.core.chunk_first.call(null,seq__16702_16720__$1);{
var G__16722 = cljs.core.chunk_rest.call(null,seq__16702_16720__$1);
var G__16723 = c__4148__auto___16721;
var G__16724 = cljs.core.count.call(null,c__4148__auto___16721);
var G__16725 = 0;
seq__16702_16708 = G__16722;
chunk__16703_16709 = G__16723;
count__16704_16710 = G__16724;
i__16705_16711 = G__16725;
continue;
}
} else
{var vec__16707_16726 = cljs.core.first.call(null,seq__16702_16720__$1);var name_16727 = cljs.core.nth.call(null,vec__16707_16726,0,null);var value_16728 = cljs.core.nth.call(null,vec__16707_16726,1,null);domina.set_attr_BANG_.call(null,content,name_16727,value_16728);
{
var G__16729 = cljs.core.next.call(null,seq__16702_16720__$1);
var G__16730 = null;
var G__16731 = 0;
var G__16732 = 0;
seq__16702_16708 = G__16729;
chunk__16703_16709 = G__16730;
count__16704_16710 = G__16731;
i__16705_16711 = G__16732;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16737_16741 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16738_16742 = null;var count__16739_16743 = 0;var i__16740_16744 = 0;while(true){
if((i__16740_16744 < count__16739_16743))
{var node_16745 = cljs.core._nth.call(null,chunk__16738_16742,i__16740_16744);goog.dom.classes.add(node_16745,class$);
{
var G__16746 = seq__16737_16741;
var G__16747 = chunk__16738_16742;
var G__16748 = count__16739_16743;
var G__16749 = (i__16740_16744 + 1);
seq__16737_16741 = G__16746;
chunk__16738_16742 = G__16747;
count__16739_16743 = G__16748;
i__16740_16744 = G__16749;
continue;
}
} else
{var temp__4092__auto___16750 = cljs.core.seq.call(null,seq__16737_16741);if(temp__4092__auto___16750)
{var seq__16737_16751__$1 = temp__4092__auto___16750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16737_16751__$1))
{var c__4148__auto___16752 = cljs.core.chunk_first.call(null,seq__16737_16751__$1);{
var G__16753 = cljs.core.chunk_rest.call(null,seq__16737_16751__$1);
var G__16754 = c__4148__auto___16752;
var G__16755 = cljs.core.count.call(null,c__4148__auto___16752);
var G__16756 = 0;
seq__16737_16741 = G__16753;
chunk__16738_16742 = G__16754;
count__16739_16743 = G__16755;
i__16740_16744 = G__16756;
continue;
}
} else
{var node_16757 = cljs.core.first.call(null,seq__16737_16751__$1);goog.dom.classes.add(node_16757,class$);
{
var G__16758 = cljs.core.next.call(null,seq__16737_16751__$1);
var G__16759 = null;
var G__16760 = 0;
var G__16761 = 0;
seq__16737_16741 = G__16758;
chunk__16738_16742 = G__16759;
count__16739_16743 = G__16760;
i__16740_16744 = G__16761;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16766_16770 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16767_16771 = null;var count__16768_16772 = 0;var i__16769_16773 = 0;while(true){
if((i__16769_16773 < count__16768_16772))
{var node_16774 = cljs.core._nth.call(null,chunk__16767_16771,i__16769_16773);goog.dom.classes.remove(node_16774,class$);
{
var G__16775 = seq__16766_16770;
var G__16776 = chunk__16767_16771;
var G__16777 = count__16768_16772;
var G__16778 = (i__16769_16773 + 1);
seq__16766_16770 = G__16775;
chunk__16767_16771 = G__16776;
count__16768_16772 = G__16777;
i__16769_16773 = G__16778;
continue;
}
} else
{var temp__4092__auto___16779 = cljs.core.seq.call(null,seq__16766_16770);if(temp__4092__auto___16779)
{var seq__16766_16780__$1 = temp__4092__auto___16779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16766_16780__$1))
{var c__4148__auto___16781 = cljs.core.chunk_first.call(null,seq__16766_16780__$1);{
var G__16782 = cljs.core.chunk_rest.call(null,seq__16766_16780__$1);
var G__16783 = c__4148__auto___16781;
var G__16784 = cljs.core.count.call(null,c__4148__auto___16781);
var G__16785 = 0;
seq__16766_16770 = G__16782;
chunk__16767_16771 = G__16783;
count__16768_16772 = G__16784;
i__16769_16773 = G__16785;
continue;
}
} else
{var node_16786 = cljs.core.first.call(null,seq__16766_16780__$1);goog.dom.classes.remove(node_16786,class$);
{
var G__16787 = cljs.core.next.call(null,seq__16766_16780__$1);
var G__16788 = null;
var G__16789 = 0;
var G__16790 = 0;
seq__16766_16770 = G__16787;
chunk__16767_16771 = G__16788;
count__16768_16772 = G__16789;
i__16769_16773 = G__16790;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16795_16799 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16796_16800 = null;var count__16797_16801 = 0;var i__16798_16802 = 0;while(true){
if((i__16798_16802 < count__16797_16801))
{var node_16803 = cljs.core._nth.call(null,chunk__16796_16800,i__16798_16802);goog.dom.classes.toggle(node_16803,class$);
{
var G__16804 = seq__16795_16799;
var G__16805 = chunk__16796_16800;
var G__16806 = count__16797_16801;
var G__16807 = (i__16798_16802 + 1);
seq__16795_16799 = G__16804;
chunk__16796_16800 = G__16805;
count__16797_16801 = G__16806;
i__16798_16802 = G__16807;
continue;
}
} else
{var temp__4092__auto___16808 = cljs.core.seq.call(null,seq__16795_16799);if(temp__4092__auto___16808)
{var seq__16795_16809__$1 = temp__4092__auto___16808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16795_16809__$1))
{var c__4148__auto___16810 = cljs.core.chunk_first.call(null,seq__16795_16809__$1);{
var G__16811 = cljs.core.chunk_rest.call(null,seq__16795_16809__$1);
var G__16812 = c__4148__auto___16810;
var G__16813 = cljs.core.count.call(null,c__4148__auto___16810);
var G__16814 = 0;
seq__16795_16799 = G__16811;
chunk__16796_16800 = G__16812;
count__16797_16801 = G__16813;
i__16798_16802 = G__16814;
continue;
}
} else
{var node_16815 = cljs.core.first.call(null,seq__16795_16809__$1);goog.dom.classes.toggle(node_16815,class$);
{
var G__16816 = cljs.core.next.call(null,seq__16795_16809__$1);
var G__16817 = null;
var G__16818 = 0;
var G__16819 = 0;
seq__16795_16799 = G__16816;
chunk__16796_16800 = G__16817;
count__16797_16801 = G__16818;
i__16798_16802 = G__16819;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16828__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16824_16829 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16825_16830 = null;var count__16826_16831 = 0;var i__16827_16832 = 0;while(true){
if((i__16827_16832 < count__16826_16831))
{var node_16833 = cljs.core._nth.call(null,chunk__16825_16830,i__16827_16832);goog.dom.classes.set(node_16833,classes_16828__$1);
{
var G__16834 = seq__16824_16829;
var G__16835 = chunk__16825_16830;
var G__16836 = count__16826_16831;
var G__16837 = (i__16827_16832 + 1);
seq__16824_16829 = G__16834;
chunk__16825_16830 = G__16835;
count__16826_16831 = G__16836;
i__16827_16832 = G__16837;
continue;
}
} else
{var temp__4092__auto___16838 = cljs.core.seq.call(null,seq__16824_16829);if(temp__4092__auto___16838)
{var seq__16824_16839__$1 = temp__4092__auto___16838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16824_16839__$1))
{var c__4148__auto___16840 = cljs.core.chunk_first.call(null,seq__16824_16839__$1);{
var G__16841 = cljs.core.chunk_rest.call(null,seq__16824_16839__$1);
var G__16842 = c__4148__auto___16840;
var G__16843 = cljs.core.count.call(null,c__4148__auto___16840);
var G__16844 = 0;
seq__16824_16829 = G__16841;
chunk__16825_16830 = G__16842;
count__16826_16831 = G__16843;
i__16827_16832 = G__16844;
continue;
}
} else
{var node_16845 = cljs.core.first.call(null,seq__16824_16839__$1);goog.dom.classes.set(node_16845,classes_16828__$1);
{
var G__16846 = cljs.core.next.call(null,seq__16824_16839__$1);
var G__16847 = null;
var G__16848 = 0;
var G__16849 = 0;
seq__16824_16829 = G__16846;
chunk__16825_16830 = G__16847;
count__16826_16831 = G__16848;
i__16827_16832 = G__16849;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16854_16858 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16855_16859 = null;var count__16856_16860 = 0;var i__16857_16861 = 0;while(true){
if((i__16857_16861 < count__16856_16860))
{var node_16862 = cljs.core._nth.call(null,chunk__16855_16859,i__16857_16861);goog.dom.setTextContent(node_16862,value);
{
var G__16863 = seq__16854_16858;
var G__16864 = chunk__16855_16859;
var G__16865 = count__16856_16860;
var G__16866 = (i__16857_16861 + 1);
seq__16854_16858 = G__16863;
chunk__16855_16859 = G__16864;
count__16856_16860 = G__16865;
i__16857_16861 = G__16866;
continue;
}
} else
{var temp__4092__auto___16867 = cljs.core.seq.call(null,seq__16854_16858);if(temp__4092__auto___16867)
{var seq__16854_16868__$1 = temp__4092__auto___16867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16854_16868__$1))
{var c__4148__auto___16869 = cljs.core.chunk_first.call(null,seq__16854_16868__$1);{
var G__16870 = cljs.core.chunk_rest.call(null,seq__16854_16868__$1);
var G__16871 = c__4148__auto___16869;
var G__16872 = cljs.core.count.call(null,c__4148__auto___16869);
var G__16873 = 0;
seq__16854_16858 = G__16870;
chunk__16855_16859 = G__16871;
count__16856_16860 = G__16872;
i__16857_16861 = G__16873;
continue;
}
} else
{var node_16874 = cljs.core.first.call(null,seq__16854_16868__$1);goog.dom.setTextContent(node_16874,value);
{
var G__16875 = cljs.core.next.call(null,seq__16854_16868__$1);
var G__16876 = null;
var G__16877 = 0;
var G__16878 = 0;
seq__16854_16858 = G__16875;
chunk__16855_16859 = G__16876;
count__16856_16860 = G__16877;
i__16857_16861 = G__16878;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16883_16887 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16884_16888 = null;var count__16885_16889 = 0;var i__16886_16890 = 0;while(true){
if((i__16886_16890 < count__16885_16889))
{var node_16891 = cljs.core._nth.call(null,chunk__16884_16888,i__16886_16890);goog.dom.forms.setValue(node_16891,value);
{
var G__16892 = seq__16883_16887;
var G__16893 = chunk__16884_16888;
var G__16894 = count__16885_16889;
var G__16895 = (i__16886_16890 + 1);
seq__16883_16887 = G__16892;
chunk__16884_16888 = G__16893;
count__16885_16889 = G__16894;
i__16886_16890 = G__16895;
continue;
}
} else
{var temp__4092__auto___16896 = cljs.core.seq.call(null,seq__16883_16887);if(temp__4092__auto___16896)
{var seq__16883_16897__$1 = temp__4092__auto___16896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16883_16897__$1))
{var c__4148__auto___16898 = cljs.core.chunk_first.call(null,seq__16883_16897__$1);{
var G__16899 = cljs.core.chunk_rest.call(null,seq__16883_16897__$1);
var G__16900 = c__4148__auto___16898;
var G__16901 = cljs.core.count.call(null,c__4148__auto___16898);
var G__16902 = 0;
seq__16883_16887 = G__16899;
chunk__16884_16888 = G__16900;
count__16885_16889 = G__16901;
i__16886_16890 = G__16902;
continue;
}
} else
{var node_16903 = cljs.core.first.call(null,seq__16883_16897__$1);goog.dom.forms.setValue(node_16903,value);
{
var G__16904 = cljs.core.next.call(null,seq__16883_16897__$1);
var G__16905 = null;
var G__16906 = 0;
var G__16907 = 0;
seq__16883_16887 = G__16904;
chunk__16884_16888 = G__16905;
count__16885_16889 = G__16906;
i__16886_16890 = G__16907;
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
{var value_16918 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16914_16919 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16915_16920 = null;var count__16916_16921 = 0;var i__16917_16922 = 0;while(true){
if((i__16917_16922 < count__16916_16921))
{var node_16923 = cljs.core._nth.call(null,chunk__16915_16920,i__16917_16922);node_16923.innerHTML = value_16918;
{
var G__16924 = seq__16914_16919;
var G__16925 = chunk__16915_16920;
var G__16926 = count__16916_16921;
var G__16927 = (i__16917_16922 + 1);
seq__16914_16919 = G__16924;
chunk__16915_16920 = G__16925;
count__16916_16921 = G__16926;
i__16917_16922 = G__16927;
continue;
}
} else
{var temp__4092__auto___16928 = cljs.core.seq.call(null,seq__16914_16919);if(temp__4092__auto___16928)
{var seq__16914_16929__$1 = temp__4092__auto___16928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16914_16929__$1))
{var c__4148__auto___16930 = cljs.core.chunk_first.call(null,seq__16914_16929__$1);{
var G__16931 = cljs.core.chunk_rest.call(null,seq__16914_16929__$1);
var G__16932 = c__4148__auto___16930;
var G__16933 = cljs.core.count.call(null,c__4148__auto___16930);
var G__16934 = 0;
seq__16914_16919 = G__16931;
chunk__16915_16920 = G__16932;
count__16916_16921 = G__16933;
i__16917_16922 = G__16934;
continue;
}
} else
{var node_16935 = cljs.core.first.call(null,seq__16914_16929__$1);node_16935.innerHTML = value_16918;
{
var G__16936 = cljs.core.next.call(null,seq__16914_16929__$1);
var G__16937 = null;
var G__16938 = 0;
var G__16939 = 0;
seq__16914_16919 = G__16936;
chunk__16915_16920 = G__16937;
count__16916_16921 = G__16938;
i__16917_16922 = G__16939;
continue;
}
}
} else
{}
}
break;
}
}catch (e16913){if((e16913 instanceof Error))
{var e_16940 = e16913;domina.replace_children_BANG_.call(null,content,value_16918);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16913;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16947_16951 = cljs.core.seq.call(null,children);var chunk__16948_16952 = null;var count__16949_16953 = 0;var i__16950_16954 = 0;while(true){
if((i__16950_16954 < count__16949_16953))
{var child_16955 = cljs.core._nth.call(null,chunk__16948_16952,i__16950_16954);frag.appendChild(child_16955);
{
var G__16956 = seq__16947_16951;
var G__16957 = chunk__16948_16952;
var G__16958 = count__16949_16953;
var G__16959 = (i__16950_16954 + 1);
seq__16947_16951 = G__16956;
chunk__16948_16952 = G__16957;
count__16949_16953 = G__16958;
i__16950_16954 = G__16959;
continue;
}
} else
{var temp__4092__auto___16960 = cljs.core.seq.call(null,seq__16947_16951);if(temp__4092__auto___16960)
{var seq__16947_16961__$1 = temp__4092__auto___16960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16947_16961__$1))
{var c__4148__auto___16962 = cljs.core.chunk_first.call(null,seq__16947_16961__$1);{
var G__16963 = cljs.core.chunk_rest.call(null,seq__16947_16961__$1);
var G__16964 = c__4148__auto___16962;
var G__16965 = cljs.core.count.call(null,c__4148__auto___16962);
var G__16966 = 0;
seq__16947_16951 = G__16963;
chunk__16948_16952 = G__16964;
count__16949_16953 = G__16965;
i__16950_16954 = G__16966;
continue;
}
} else
{var child_16967 = cljs.core.first.call(null,seq__16947_16961__$1);frag.appendChild(child_16967);
{
var G__16968 = cljs.core.next.call(null,seq__16947_16961__$1);
var G__16969 = null;
var G__16970 = 0;
var G__16971 = 0;
seq__16947_16951 = G__16968;
chunk__16948_16952 = G__16969;
count__16949_16953 = G__16970;
i__16950_16954 = G__16971;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16941_SHARP_,p2__16942_SHARP_){return f.call(null,p1__16941_SHARP_,p2__16942_SHARP_);
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
{if((function (){var G__16973 = list_thing;if(G__16973)
{var bit__4050__auto__ = (G__16973.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16973.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16973.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16973);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16973);
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
{if((function (){var G__16974 = content;if(G__16974)
{var bit__4050__auto__ = (G__16974.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16974.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16974.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16974);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16974);
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
{if((function (){var G__16975 = content;if(G__16975)
{var bit__4050__auto__ = (G__16975.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16975.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16975.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16975);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16975);
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