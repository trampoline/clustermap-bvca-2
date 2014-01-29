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
var opt_wrapper_16507 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16508 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16509 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16508,table_section_wrapper_16508,opt_wrapper_16507,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16509,table_section_wrapper_16508,cell_wrapper_16509,opt_wrapper_16507,table_section_wrapper_16508,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16508]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16514 = cljs.core.seq.call(null,tbody);var chunk__16515 = null;var count__16516 = 0;var i__16517 = 0;while(true){
if((i__16517 < count__16516))
{var child = cljs.core._nth.call(null,chunk__16515,i__16517);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16518 = seq__16514;
var G__16519 = chunk__16515;
var G__16520 = count__16516;
var G__16521 = (i__16517 + 1);
seq__16514 = G__16518;
chunk__16515 = G__16519;
count__16516 = G__16520;
i__16517 = G__16521;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16514);if(temp__4092__auto__)
{var seq__16514__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16514__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16514__$1);{
var G__16522 = cljs.core.chunk_rest.call(null,seq__16514__$1);
var G__16523 = c__4148__auto__;
var G__16524 = cljs.core.count.call(null,c__4148__auto__);
var G__16525 = 0;
seq__16514 = G__16522;
chunk__16515 = G__16523;
count__16516 = G__16524;
i__16517 = G__16525;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16514__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16526 = cljs.core.next.call(null,seq__16514__$1);
var G__16527 = null;
var G__16528 = 0;
var G__16529 = 0;
seq__16514 = G__16526;
chunk__16515 = G__16527;
count__16516 = G__16528;
i__16517 = G__16529;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16531 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16531,0,null);var start_wrap = cljs.core.nth.call(null,vec__16531,1,null);var end_wrap = cljs.core.nth.call(null,vec__16531,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16532 = wrapper.lastChild;
var G__16533 = (level - 1);
wrapper = G__16532;
level = G__16533;
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
domina.DomContent = (function (){var obj16535 = {};return obj16535;
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
log_debug.cljs$lang$applyTo = (function (arglist__16536){
var mesg = cljs.core.seq(arglist__16536);
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
log.cljs$lang$applyTo = (function (arglist__16537){
var mesg = cljs.core.seq(arglist__16537);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16538){
var contents = cljs.core.seq(arglist__16538);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16539_SHARP_){return p1__16539_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16540_SHARP_,p2__16541_SHARP_){return goog.dom.insertChildAt(p1__16540_SHARP_,p2__16541_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16543_SHARP_,p2__16542_SHARP_){return goog.dom.insertSiblingBefore(p2__16542_SHARP_,p1__16543_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16545_SHARP_,p2__16544_SHARP_){return goog.dom.insertSiblingAfter(p2__16544_SHARP_,p1__16545_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16547_SHARP_,p2__16546_SHARP_){return goog.dom.replaceNode(p2__16546_SHARP_,p1__16547_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16552_16556 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16553_16557 = null;var count__16554_16558 = 0;var i__16555_16559 = 0;while(true){
if((i__16555_16559 < count__16554_16558))
{var n_16560 = cljs.core._nth.call(null,chunk__16553_16557,i__16555_16559);goog.style.setStyle(n_16560,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16561 = seq__16552_16556;
var G__16562 = chunk__16553_16557;
var G__16563 = count__16554_16558;
var G__16564 = (i__16555_16559 + 1);
seq__16552_16556 = G__16561;
chunk__16553_16557 = G__16562;
count__16554_16558 = G__16563;
i__16555_16559 = G__16564;
continue;
}
} else
{var temp__4092__auto___16565 = cljs.core.seq.call(null,seq__16552_16556);if(temp__4092__auto___16565)
{var seq__16552_16566__$1 = temp__4092__auto___16565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16552_16566__$1))
{var c__4148__auto___16567 = cljs.core.chunk_first.call(null,seq__16552_16566__$1);{
var G__16568 = cljs.core.chunk_rest.call(null,seq__16552_16566__$1);
var G__16569 = c__4148__auto___16567;
var G__16570 = cljs.core.count.call(null,c__4148__auto___16567);
var G__16571 = 0;
seq__16552_16556 = G__16568;
chunk__16553_16557 = G__16569;
count__16554_16558 = G__16570;
i__16555_16559 = G__16571;
continue;
}
} else
{var n_16572 = cljs.core.first.call(null,seq__16552_16566__$1);goog.style.setStyle(n_16572,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16573 = cljs.core.next.call(null,seq__16552_16566__$1);
var G__16574 = null;
var G__16575 = 0;
var G__16576 = 0;
seq__16552_16556 = G__16573;
chunk__16553_16557 = G__16574;
count__16554_16558 = G__16575;
i__16555_16559 = G__16576;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16577){
var content = cljs.core.first(arglist__16577);
arglist__16577 = cljs.core.next(arglist__16577);
var name = cljs.core.first(arglist__16577);
var value = cljs.core.rest(arglist__16577);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16582_16586 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16583_16587 = null;var count__16584_16588 = 0;var i__16585_16589 = 0;while(true){
if((i__16585_16589 < count__16584_16588))
{var n_16590 = cljs.core._nth.call(null,chunk__16583_16587,i__16585_16589);n_16590.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16591 = seq__16582_16586;
var G__16592 = chunk__16583_16587;
var G__16593 = count__16584_16588;
var G__16594 = (i__16585_16589 + 1);
seq__16582_16586 = G__16591;
chunk__16583_16587 = G__16592;
count__16584_16588 = G__16593;
i__16585_16589 = G__16594;
continue;
}
} else
{var temp__4092__auto___16595 = cljs.core.seq.call(null,seq__16582_16586);if(temp__4092__auto___16595)
{var seq__16582_16596__$1 = temp__4092__auto___16595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16582_16596__$1))
{var c__4148__auto___16597 = cljs.core.chunk_first.call(null,seq__16582_16596__$1);{
var G__16598 = cljs.core.chunk_rest.call(null,seq__16582_16596__$1);
var G__16599 = c__4148__auto___16597;
var G__16600 = cljs.core.count.call(null,c__4148__auto___16597);
var G__16601 = 0;
seq__16582_16586 = G__16598;
chunk__16583_16587 = G__16599;
count__16584_16588 = G__16600;
i__16585_16589 = G__16601;
continue;
}
} else
{var n_16602 = cljs.core.first.call(null,seq__16582_16596__$1);n_16602.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16603 = cljs.core.next.call(null,seq__16582_16596__$1);
var G__16604 = null;
var G__16605 = 0;
var G__16606 = 0;
seq__16582_16586 = G__16603;
chunk__16583_16587 = G__16604;
count__16584_16588 = G__16605;
i__16585_16589 = G__16606;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16607){
var content = cljs.core.first(arglist__16607);
arglist__16607 = cljs.core.next(arglist__16607);
var name = cljs.core.first(arglist__16607);
var value = cljs.core.rest(arglist__16607);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16612_16616 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16613_16617 = null;var count__16614_16618 = 0;var i__16615_16619 = 0;while(true){
if((i__16615_16619 < count__16614_16618))
{var n_16620 = cljs.core._nth.call(null,chunk__16613_16617,i__16615_16619);n_16620.removeAttribute(cljs.core.name.call(null,name));
{
var G__16621 = seq__16612_16616;
var G__16622 = chunk__16613_16617;
var G__16623 = count__16614_16618;
var G__16624 = (i__16615_16619 + 1);
seq__16612_16616 = G__16621;
chunk__16613_16617 = G__16622;
count__16614_16618 = G__16623;
i__16615_16619 = G__16624;
continue;
}
} else
{var temp__4092__auto___16625 = cljs.core.seq.call(null,seq__16612_16616);if(temp__4092__auto___16625)
{var seq__16612_16626__$1 = temp__4092__auto___16625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16612_16626__$1))
{var c__4148__auto___16627 = cljs.core.chunk_first.call(null,seq__16612_16626__$1);{
var G__16628 = cljs.core.chunk_rest.call(null,seq__16612_16626__$1);
var G__16629 = c__4148__auto___16627;
var G__16630 = cljs.core.count.call(null,c__4148__auto___16627);
var G__16631 = 0;
seq__16612_16616 = G__16628;
chunk__16613_16617 = G__16629;
count__16614_16618 = G__16630;
i__16615_16619 = G__16631;
continue;
}
} else
{var n_16632 = cljs.core.first.call(null,seq__16612_16626__$1);n_16632.removeAttribute(cljs.core.name.call(null,name));
{
var G__16633 = cljs.core.next.call(null,seq__16612_16626__$1);
var G__16634 = null;
var G__16635 = 0;
var G__16636 = 0;
seq__16612_16616 = G__16633;
chunk__16613_16617 = G__16634;
count__16614_16618 = G__16635;
i__16615_16619 = G__16636;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16638 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16638,0,null);var v = cljs.core.nth.call(null,vec__16638,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16639_SHARP_){var attr = attrs__$1.item(p1__16639_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16646_16652 = cljs.core.seq.call(null,styles);var chunk__16647_16653 = null;var count__16648_16654 = 0;var i__16649_16655 = 0;while(true){
if((i__16649_16655 < count__16648_16654))
{var vec__16650_16656 = cljs.core._nth.call(null,chunk__16647_16653,i__16649_16655);var name_16657 = cljs.core.nth.call(null,vec__16650_16656,0,null);var value_16658 = cljs.core.nth.call(null,vec__16650_16656,1,null);domina.set_style_BANG_.call(null,content,name_16657,value_16658);
{
var G__16659 = seq__16646_16652;
var G__16660 = chunk__16647_16653;
var G__16661 = count__16648_16654;
var G__16662 = (i__16649_16655 + 1);
seq__16646_16652 = G__16659;
chunk__16647_16653 = G__16660;
count__16648_16654 = G__16661;
i__16649_16655 = G__16662;
continue;
}
} else
{var temp__4092__auto___16663 = cljs.core.seq.call(null,seq__16646_16652);if(temp__4092__auto___16663)
{var seq__16646_16664__$1 = temp__4092__auto___16663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16646_16664__$1))
{var c__4148__auto___16665 = cljs.core.chunk_first.call(null,seq__16646_16664__$1);{
var G__16666 = cljs.core.chunk_rest.call(null,seq__16646_16664__$1);
var G__16667 = c__4148__auto___16665;
var G__16668 = cljs.core.count.call(null,c__4148__auto___16665);
var G__16669 = 0;
seq__16646_16652 = G__16666;
chunk__16647_16653 = G__16667;
count__16648_16654 = G__16668;
i__16649_16655 = G__16669;
continue;
}
} else
{var vec__16651_16670 = cljs.core.first.call(null,seq__16646_16664__$1);var name_16671 = cljs.core.nth.call(null,vec__16651_16670,0,null);var value_16672 = cljs.core.nth.call(null,vec__16651_16670,1,null);domina.set_style_BANG_.call(null,content,name_16671,value_16672);
{
var G__16673 = cljs.core.next.call(null,seq__16646_16664__$1);
var G__16674 = null;
var G__16675 = 0;
var G__16676 = 0;
seq__16646_16652 = G__16673;
chunk__16647_16653 = G__16674;
count__16648_16654 = G__16675;
i__16649_16655 = G__16676;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16683_16689 = cljs.core.seq.call(null,attrs);var chunk__16684_16690 = null;var count__16685_16691 = 0;var i__16686_16692 = 0;while(true){
if((i__16686_16692 < count__16685_16691))
{var vec__16687_16693 = cljs.core._nth.call(null,chunk__16684_16690,i__16686_16692);var name_16694 = cljs.core.nth.call(null,vec__16687_16693,0,null);var value_16695 = cljs.core.nth.call(null,vec__16687_16693,1,null);domina.set_attr_BANG_.call(null,content,name_16694,value_16695);
{
var G__16696 = seq__16683_16689;
var G__16697 = chunk__16684_16690;
var G__16698 = count__16685_16691;
var G__16699 = (i__16686_16692 + 1);
seq__16683_16689 = G__16696;
chunk__16684_16690 = G__16697;
count__16685_16691 = G__16698;
i__16686_16692 = G__16699;
continue;
}
} else
{var temp__4092__auto___16700 = cljs.core.seq.call(null,seq__16683_16689);if(temp__4092__auto___16700)
{var seq__16683_16701__$1 = temp__4092__auto___16700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16683_16701__$1))
{var c__4148__auto___16702 = cljs.core.chunk_first.call(null,seq__16683_16701__$1);{
var G__16703 = cljs.core.chunk_rest.call(null,seq__16683_16701__$1);
var G__16704 = c__4148__auto___16702;
var G__16705 = cljs.core.count.call(null,c__4148__auto___16702);
var G__16706 = 0;
seq__16683_16689 = G__16703;
chunk__16684_16690 = G__16704;
count__16685_16691 = G__16705;
i__16686_16692 = G__16706;
continue;
}
} else
{var vec__16688_16707 = cljs.core.first.call(null,seq__16683_16701__$1);var name_16708 = cljs.core.nth.call(null,vec__16688_16707,0,null);var value_16709 = cljs.core.nth.call(null,vec__16688_16707,1,null);domina.set_attr_BANG_.call(null,content,name_16708,value_16709);
{
var G__16710 = cljs.core.next.call(null,seq__16683_16701__$1);
var G__16711 = null;
var G__16712 = 0;
var G__16713 = 0;
seq__16683_16689 = G__16710;
chunk__16684_16690 = G__16711;
count__16685_16691 = G__16712;
i__16686_16692 = G__16713;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16718_16722 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16719_16723 = null;var count__16720_16724 = 0;var i__16721_16725 = 0;while(true){
if((i__16721_16725 < count__16720_16724))
{var node_16726 = cljs.core._nth.call(null,chunk__16719_16723,i__16721_16725);goog.dom.classes.add(node_16726,class$);
{
var G__16727 = seq__16718_16722;
var G__16728 = chunk__16719_16723;
var G__16729 = count__16720_16724;
var G__16730 = (i__16721_16725 + 1);
seq__16718_16722 = G__16727;
chunk__16719_16723 = G__16728;
count__16720_16724 = G__16729;
i__16721_16725 = G__16730;
continue;
}
} else
{var temp__4092__auto___16731 = cljs.core.seq.call(null,seq__16718_16722);if(temp__4092__auto___16731)
{var seq__16718_16732__$1 = temp__4092__auto___16731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16718_16732__$1))
{var c__4148__auto___16733 = cljs.core.chunk_first.call(null,seq__16718_16732__$1);{
var G__16734 = cljs.core.chunk_rest.call(null,seq__16718_16732__$1);
var G__16735 = c__4148__auto___16733;
var G__16736 = cljs.core.count.call(null,c__4148__auto___16733);
var G__16737 = 0;
seq__16718_16722 = G__16734;
chunk__16719_16723 = G__16735;
count__16720_16724 = G__16736;
i__16721_16725 = G__16737;
continue;
}
} else
{var node_16738 = cljs.core.first.call(null,seq__16718_16732__$1);goog.dom.classes.add(node_16738,class$);
{
var G__16739 = cljs.core.next.call(null,seq__16718_16732__$1);
var G__16740 = null;
var G__16741 = 0;
var G__16742 = 0;
seq__16718_16722 = G__16739;
chunk__16719_16723 = G__16740;
count__16720_16724 = G__16741;
i__16721_16725 = G__16742;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16747_16751 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16748_16752 = null;var count__16749_16753 = 0;var i__16750_16754 = 0;while(true){
if((i__16750_16754 < count__16749_16753))
{var node_16755 = cljs.core._nth.call(null,chunk__16748_16752,i__16750_16754);goog.dom.classes.remove(node_16755,class$);
{
var G__16756 = seq__16747_16751;
var G__16757 = chunk__16748_16752;
var G__16758 = count__16749_16753;
var G__16759 = (i__16750_16754 + 1);
seq__16747_16751 = G__16756;
chunk__16748_16752 = G__16757;
count__16749_16753 = G__16758;
i__16750_16754 = G__16759;
continue;
}
} else
{var temp__4092__auto___16760 = cljs.core.seq.call(null,seq__16747_16751);if(temp__4092__auto___16760)
{var seq__16747_16761__$1 = temp__4092__auto___16760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16747_16761__$1))
{var c__4148__auto___16762 = cljs.core.chunk_first.call(null,seq__16747_16761__$1);{
var G__16763 = cljs.core.chunk_rest.call(null,seq__16747_16761__$1);
var G__16764 = c__4148__auto___16762;
var G__16765 = cljs.core.count.call(null,c__4148__auto___16762);
var G__16766 = 0;
seq__16747_16751 = G__16763;
chunk__16748_16752 = G__16764;
count__16749_16753 = G__16765;
i__16750_16754 = G__16766;
continue;
}
} else
{var node_16767 = cljs.core.first.call(null,seq__16747_16761__$1);goog.dom.classes.remove(node_16767,class$);
{
var G__16768 = cljs.core.next.call(null,seq__16747_16761__$1);
var G__16769 = null;
var G__16770 = 0;
var G__16771 = 0;
seq__16747_16751 = G__16768;
chunk__16748_16752 = G__16769;
count__16749_16753 = G__16770;
i__16750_16754 = G__16771;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16776_16780 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16777_16781 = null;var count__16778_16782 = 0;var i__16779_16783 = 0;while(true){
if((i__16779_16783 < count__16778_16782))
{var node_16784 = cljs.core._nth.call(null,chunk__16777_16781,i__16779_16783);goog.dom.classes.toggle(node_16784,class$);
{
var G__16785 = seq__16776_16780;
var G__16786 = chunk__16777_16781;
var G__16787 = count__16778_16782;
var G__16788 = (i__16779_16783 + 1);
seq__16776_16780 = G__16785;
chunk__16777_16781 = G__16786;
count__16778_16782 = G__16787;
i__16779_16783 = G__16788;
continue;
}
} else
{var temp__4092__auto___16789 = cljs.core.seq.call(null,seq__16776_16780);if(temp__4092__auto___16789)
{var seq__16776_16790__$1 = temp__4092__auto___16789;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16776_16790__$1))
{var c__4148__auto___16791 = cljs.core.chunk_first.call(null,seq__16776_16790__$1);{
var G__16792 = cljs.core.chunk_rest.call(null,seq__16776_16790__$1);
var G__16793 = c__4148__auto___16791;
var G__16794 = cljs.core.count.call(null,c__4148__auto___16791);
var G__16795 = 0;
seq__16776_16780 = G__16792;
chunk__16777_16781 = G__16793;
count__16778_16782 = G__16794;
i__16779_16783 = G__16795;
continue;
}
} else
{var node_16796 = cljs.core.first.call(null,seq__16776_16790__$1);goog.dom.classes.toggle(node_16796,class$);
{
var G__16797 = cljs.core.next.call(null,seq__16776_16790__$1);
var G__16798 = null;
var G__16799 = 0;
var G__16800 = 0;
seq__16776_16780 = G__16797;
chunk__16777_16781 = G__16798;
count__16778_16782 = G__16799;
i__16779_16783 = G__16800;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16809__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16805_16810 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16806_16811 = null;var count__16807_16812 = 0;var i__16808_16813 = 0;while(true){
if((i__16808_16813 < count__16807_16812))
{var node_16814 = cljs.core._nth.call(null,chunk__16806_16811,i__16808_16813);goog.dom.classes.set(node_16814,classes_16809__$1);
{
var G__16815 = seq__16805_16810;
var G__16816 = chunk__16806_16811;
var G__16817 = count__16807_16812;
var G__16818 = (i__16808_16813 + 1);
seq__16805_16810 = G__16815;
chunk__16806_16811 = G__16816;
count__16807_16812 = G__16817;
i__16808_16813 = G__16818;
continue;
}
} else
{var temp__4092__auto___16819 = cljs.core.seq.call(null,seq__16805_16810);if(temp__4092__auto___16819)
{var seq__16805_16820__$1 = temp__4092__auto___16819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16805_16820__$1))
{var c__4148__auto___16821 = cljs.core.chunk_first.call(null,seq__16805_16820__$1);{
var G__16822 = cljs.core.chunk_rest.call(null,seq__16805_16820__$1);
var G__16823 = c__4148__auto___16821;
var G__16824 = cljs.core.count.call(null,c__4148__auto___16821);
var G__16825 = 0;
seq__16805_16810 = G__16822;
chunk__16806_16811 = G__16823;
count__16807_16812 = G__16824;
i__16808_16813 = G__16825;
continue;
}
} else
{var node_16826 = cljs.core.first.call(null,seq__16805_16820__$1);goog.dom.classes.set(node_16826,classes_16809__$1);
{
var G__16827 = cljs.core.next.call(null,seq__16805_16820__$1);
var G__16828 = null;
var G__16829 = 0;
var G__16830 = 0;
seq__16805_16810 = G__16827;
chunk__16806_16811 = G__16828;
count__16807_16812 = G__16829;
i__16808_16813 = G__16830;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16835_16839 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16836_16840 = null;var count__16837_16841 = 0;var i__16838_16842 = 0;while(true){
if((i__16838_16842 < count__16837_16841))
{var node_16843 = cljs.core._nth.call(null,chunk__16836_16840,i__16838_16842);goog.dom.setTextContent(node_16843,value);
{
var G__16844 = seq__16835_16839;
var G__16845 = chunk__16836_16840;
var G__16846 = count__16837_16841;
var G__16847 = (i__16838_16842 + 1);
seq__16835_16839 = G__16844;
chunk__16836_16840 = G__16845;
count__16837_16841 = G__16846;
i__16838_16842 = G__16847;
continue;
}
} else
{var temp__4092__auto___16848 = cljs.core.seq.call(null,seq__16835_16839);if(temp__4092__auto___16848)
{var seq__16835_16849__$1 = temp__4092__auto___16848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16835_16849__$1))
{var c__4148__auto___16850 = cljs.core.chunk_first.call(null,seq__16835_16849__$1);{
var G__16851 = cljs.core.chunk_rest.call(null,seq__16835_16849__$1);
var G__16852 = c__4148__auto___16850;
var G__16853 = cljs.core.count.call(null,c__4148__auto___16850);
var G__16854 = 0;
seq__16835_16839 = G__16851;
chunk__16836_16840 = G__16852;
count__16837_16841 = G__16853;
i__16838_16842 = G__16854;
continue;
}
} else
{var node_16855 = cljs.core.first.call(null,seq__16835_16849__$1);goog.dom.setTextContent(node_16855,value);
{
var G__16856 = cljs.core.next.call(null,seq__16835_16849__$1);
var G__16857 = null;
var G__16858 = 0;
var G__16859 = 0;
seq__16835_16839 = G__16856;
chunk__16836_16840 = G__16857;
count__16837_16841 = G__16858;
i__16838_16842 = G__16859;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16864_16868 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16865_16869 = null;var count__16866_16870 = 0;var i__16867_16871 = 0;while(true){
if((i__16867_16871 < count__16866_16870))
{var node_16872 = cljs.core._nth.call(null,chunk__16865_16869,i__16867_16871);goog.dom.forms.setValue(node_16872,value);
{
var G__16873 = seq__16864_16868;
var G__16874 = chunk__16865_16869;
var G__16875 = count__16866_16870;
var G__16876 = (i__16867_16871 + 1);
seq__16864_16868 = G__16873;
chunk__16865_16869 = G__16874;
count__16866_16870 = G__16875;
i__16867_16871 = G__16876;
continue;
}
} else
{var temp__4092__auto___16877 = cljs.core.seq.call(null,seq__16864_16868);if(temp__4092__auto___16877)
{var seq__16864_16878__$1 = temp__4092__auto___16877;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16864_16878__$1))
{var c__4148__auto___16879 = cljs.core.chunk_first.call(null,seq__16864_16878__$1);{
var G__16880 = cljs.core.chunk_rest.call(null,seq__16864_16878__$1);
var G__16881 = c__4148__auto___16879;
var G__16882 = cljs.core.count.call(null,c__4148__auto___16879);
var G__16883 = 0;
seq__16864_16868 = G__16880;
chunk__16865_16869 = G__16881;
count__16866_16870 = G__16882;
i__16867_16871 = G__16883;
continue;
}
} else
{var node_16884 = cljs.core.first.call(null,seq__16864_16878__$1);goog.dom.forms.setValue(node_16884,value);
{
var G__16885 = cljs.core.next.call(null,seq__16864_16878__$1);
var G__16886 = null;
var G__16887 = 0;
var G__16888 = 0;
seq__16864_16868 = G__16885;
chunk__16865_16869 = G__16886;
count__16866_16870 = G__16887;
i__16867_16871 = G__16888;
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
{var value_16899 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16895_16900 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16896_16901 = null;var count__16897_16902 = 0;var i__16898_16903 = 0;while(true){
if((i__16898_16903 < count__16897_16902))
{var node_16904 = cljs.core._nth.call(null,chunk__16896_16901,i__16898_16903);node_16904.innerHTML = value_16899;
{
var G__16905 = seq__16895_16900;
var G__16906 = chunk__16896_16901;
var G__16907 = count__16897_16902;
var G__16908 = (i__16898_16903 + 1);
seq__16895_16900 = G__16905;
chunk__16896_16901 = G__16906;
count__16897_16902 = G__16907;
i__16898_16903 = G__16908;
continue;
}
} else
{var temp__4092__auto___16909 = cljs.core.seq.call(null,seq__16895_16900);if(temp__4092__auto___16909)
{var seq__16895_16910__$1 = temp__4092__auto___16909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16895_16910__$1))
{var c__4148__auto___16911 = cljs.core.chunk_first.call(null,seq__16895_16910__$1);{
var G__16912 = cljs.core.chunk_rest.call(null,seq__16895_16910__$1);
var G__16913 = c__4148__auto___16911;
var G__16914 = cljs.core.count.call(null,c__4148__auto___16911);
var G__16915 = 0;
seq__16895_16900 = G__16912;
chunk__16896_16901 = G__16913;
count__16897_16902 = G__16914;
i__16898_16903 = G__16915;
continue;
}
} else
{var node_16916 = cljs.core.first.call(null,seq__16895_16910__$1);node_16916.innerHTML = value_16899;
{
var G__16917 = cljs.core.next.call(null,seq__16895_16910__$1);
var G__16918 = null;
var G__16919 = 0;
var G__16920 = 0;
seq__16895_16900 = G__16917;
chunk__16896_16901 = G__16918;
count__16897_16902 = G__16919;
i__16898_16903 = G__16920;
continue;
}
}
} else
{}
}
break;
}
}catch (e16894){if((e16894 instanceof Error))
{var e_16921 = e16894;domina.replace_children_BANG_.call(null,content,value_16899);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16894;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16928_16932 = cljs.core.seq.call(null,children);var chunk__16929_16933 = null;var count__16930_16934 = 0;var i__16931_16935 = 0;while(true){
if((i__16931_16935 < count__16930_16934))
{var child_16936 = cljs.core._nth.call(null,chunk__16929_16933,i__16931_16935);frag.appendChild(child_16936);
{
var G__16937 = seq__16928_16932;
var G__16938 = chunk__16929_16933;
var G__16939 = count__16930_16934;
var G__16940 = (i__16931_16935 + 1);
seq__16928_16932 = G__16937;
chunk__16929_16933 = G__16938;
count__16930_16934 = G__16939;
i__16931_16935 = G__16940;
continue;
}
} else
{var temp__4092__auto___16941 = cljs.core.seq.call(null,seq__16928_16932);if(temp__4092__auto___16941)
{var seq__16928_16942__$1 = temp__4092__auto___16941;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16928_16942__$1))
{var c__4148__auto___16943 = cljs.core.chunk_first.call(null,seq__16928_16942__$1);{
var G__16944 = cljs.core.chunk_rest.call(null,seq__16928_16942__$1);
var G__16945 = c__4148__auto___16943;
var G__16946 = cljs.core.count.call(null,c__4148__auto___16943);
var G__16947 = 0;
seq__16928_16932 = G__16944;
chunk__16929_16933 = G__16945;
count__16930_16934 = G__16946;
i__16931_16935 = G__16947;
continue;
}
} else
{var child_16948 = cljs.core.first.call(null,seq__16928_16942__$1);frag.appendChild(child_16948);
{
var G__16949 = cljs.core.next.call(null,seq__16928_16942__$1);
var G__16950 = null;
var G__16951 = 0;
var G__16952 = 0;
seq__16928_16932 = G__16949;
chunk__16929_16933 = G__16950;
count__16930_16934 = G__16951;
i__16931_16935 = G__16952;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16922_SHARP_,p2__16923_SHARP_){return f.call(null,p1__16922_SHARP_,p2__16923_SHARP_);
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
{if((function (){var G__16954 = list_thing;if(G__16954)
{var bit__4050__auto__ = (G__16954.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16954.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16954.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16954);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16954);
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
{if((function (){var G__16955 = content;if(G__16955)
{var bit__4050__auto__ = (G__16955.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16955.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16955.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16955);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16955);
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
{if((function (){var G__16956 = content;if(G__16956)
{var bit__4050__auto__ = (G__16956.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16956.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16956.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16956);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16956);
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