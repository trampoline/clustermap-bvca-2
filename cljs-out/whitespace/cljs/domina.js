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
var opt_wrapper_36474 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36475 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36476 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36475,table_section_wrapper_36475,opt_wrapper_36474,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36476,table_section_wrapper_36475,cell_wrapper_36476,opt_wrapper_36474,table_section_wrapper_36475,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36475]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36481 = cljs.core.seq.call(null,tbody);var chunk__36482 = null;var count__36483 = 0;var i__36484 = 0;while(true){
if((i__36484 < count__36483))
{var child = cljs.core._nth.call(null,chunk__36482,i__36484);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36485 = seq__36481;
var G__36486 = chunk__36482;
var G__36487 = count__36483;
var G__36488 = (i__36484 + 1);
seq__36481 = G__36485;
chunk__36482 = G__36486;
count__36483 = G__36487;
i__36484 = G__36488;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36481);if(temp__4092__auto__)
{var seq__36481__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36481__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36481__$1);{
var G__36489 = cljs.core.chunk_rest.call(null,seq__36481__$1);
var G__36490 = c__4148__auto__;
var G__36491 = cljs.core.count.call(null,c__4148__auto__);
var G__36492 = 0;
seq__36481 = G__36489;
chunk__36482 = G__36490;
count__36483 = G__36491;
i__36484 = G__36492;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36481__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36493 = cljs.core.next.call(null,seq__36481__$1);
var G__36494 = null;
var G__36495 = 0;
var G__36496 = 0;
seq__36481 = G__36493;
chunk__36482 = G__36494;
count__36483 = G__36495;
i__36484 = G__36496;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36498 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36498,0,null);var start_wrap = cljs.core.nth.call(null,vec__36498,1,null);var end_wrap = cljs.core.nth.call(null,vec__36498,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36499 = wrapper.lastChild;
var G__36500 = (level - 1);
wrapper = G__36499;
level = G__36500;
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
domina.DomContent = (function (){var obj36502 = {};return obj36502;
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
log_debug.cljs$lang$applyTo = (function (arglist__36503){
var mesg = cljs.core.seq(arglist__36503);
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
log.cljs$lang$applyTo = (function (arglist__36504){
var mesg = cljs.core.seq(arglist__36504);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36505){
var contents = cljs.core.seq(arglist__36505);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36506_SHARP_){return p1__36506_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36507_SHARP_,p2__36508_SHARP_){return goog.dom.insertChildAt(p1__36507_SHARP_,p2__36508_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36510_SHARP_,p2__36509_SHARP_){return goog.dom.insertSiblingBefore(p2__36509_SHARP_,p1__36510_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36512_SHARP_,p2__36511_SHARP_){return goog.dom.insertSiblingAfter(p2__36511_SHARP_,p1__36512_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36514_SHARP_,p2__36513_SHARP_){return goog.dom.replaceNode(p2__36513_SHARP_,p1__36514_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36519_36523 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36520_36524 = null;var count__36521_36525 = 0;var i__36522_36526 = 0;while(true){
if((i__36522_36526 < count__36521_36525))
{var n_36527 = cljs.core._nth.call(null,chunk__36520_36524,i__36522_36526);goog.style.setStyle(n_36527,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36528 = seq__36519_36523;
var G__36529 = chunk__36520_36524;
var G__36530 = count__36521_36525;
var G__36531 = (i__36522_36526 + 1);
seq__36519_36523 = G__36528;
chunk__36520_36524 = G__36529;
count__36521_36525 = G__36530;
i__36522_36526 = G__36531;
continue;
}
} else
{var temp__4092__auto___36532 = cljs.core.seq.call(null,seq__36519_36523);if(temp__4092__auto___36532)
{var seq__36519_36533__$1 = temp__4092__auto___36532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36519_36533__$1))
{var c__4148__auto___36534 = cljs.core.chunk_first.call(null,seq__36519_36533__$1);{
var G__36535 = cljs.core.chunk_rest.call(null,seq__36519_36533__$1);
var G__36536 = c__4148__auto___36534;
var G__36537 = cljs.core.count.call(null,c__4148__auto___36534);
var G__36538 = 0;
seq__36519_36523 = G__36535;
chunk__36520_36524 = G__36536;
count__36521_36525 = G__36537;
i__36522_36526 = G__36538;
continue;
}
} else
{var n_36539 = cljs.core.first.call(null,seq__36519_36533__$1);goog.style.setStyle(n_36539,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36540 = cljs.core.next.call(null,seq__36519_36533__$1);
var G__36541 = null;
var G__36542 = 0;
var G__36543 = 0;
seq__36519_36523 = G__36540;
chunk__36520_36524 = G__36541;
count__36521_36525 = G__36542;
i__36522_36526 = G__36543;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36544){
var content = cljs.core.first(arglist__36544);
arglist__36544 = cljs.core.next(arglist__36544);
var name = cljs.core.first(arglist__36544);
var value = cljs.core.rest(arglist__36544);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36549_36553 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36550_36554 = null;var count__36551_36555 = 0;var i__36552_36556 = 0;while(true){
if((i__36552_36556 < count__36551_36555))
{var n_36557 = cljs.core._nth.call(null,chunk__36550_36554,i__36552_36556);n_36557.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36558 = seq__36549_36553;
var G__36559 = chunk__36550_36554;
var G__36560 = count__36551_36555;
var G__36561 = (i__36552_36556 + 1);
seq__36549_36553 = G__36558;
chunk__36550_36554 = G__36559;
count__36551_36555 = G__36560;
i__36552_36556 = G__36561;
continue;
}
} else
{var temp__4092__auto___36562 = cljs.core.seq.call(null,seq__36549_36553);if(temp__4092__auto___36562)
{var seq__36549_36563__$1 = temp__4092__auto___36562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36549_36563__$1))
{var c__4148__auto___36564 = cljs.core.chunk_first.call(null,seq__36549_36563__$1);{
var G__36565 = cljs.core.chunk_rest.call(null,seq__36549_36563__$1);
var G__36566 = c__4148__auto___36564;
var G__36567 = cljs.core.count.call(null,c__4148__auto___36564);
var G__36568 = 0;
seq__36549_36553 = G__36565;
chunk__36550_36554 = G__36566;
count__36551_36555 = G__36567;
i__36552_36556 = G__36568;
continue;
}
} else
{var n_36569 = cljs.core.first.call(null,seq__36549_36563__$1);n_36569.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36570 = cljs.core.next.call(null,seq__36549_36563__$1);
var G__36571 = null;
var G__36572 = 0;
var G__36573 = 0;
seq__36549_36553 = G__36570;
chunk__36550_36554 = G__36571;
count__36551_36555 = G__36572;
i__36552_36556 = G__36573;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36574){
var content = cljs.core.first(arglist__36574);
arglist__36574 = cljs.core.next(arglist__36574);
var name = cljs.core.first(arglist__36574);
var value = cljs.core.rest(arglist__36574);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36579_36583 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36580_36584 = null;var count__36581_36585 = 0;var i__36582_36586 = 0;while(true){
if((i__36582_36586 < count__36581_36585))
{var n_36587 = cljs.core._nth.call(null,chunk__36580_36584,i__36582_36586);n_36587.removeAttribute(cljs.core.name.call(null,name));
{
var G__36588 = seq__36579_36583;
var G__36589 = chunk__36580_36584;
var G__36590 = count__36581_36585;
var G__36591 = (i__36582_36586 + 1);
seq__36579_36583 = G__36588;
chunk__36580_36584 = G__36589;
count__36581_36585 = G__36590;
i__36582_36586 = G__36591;
continue;
}
} else
{var temp__4092__auto___36592 = cljs.core.seq.call(null,seq__36579_36583);if(temp__4092__auto___36592)
{var seq__36579_36593__$1 = temp__4092__auto___36592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36579_36593__$1))
{var c__4148__auto___36594 = cljs.core.chunk_first.call(null,seq__36579_36593__$1);{
var G__36595 = cljs.core.chunk_rest.call(null,seq__36579_36593__$1);
var G__36596 = c__4148__auto___36594;
var G__36597 = cljs.core.count.call(null,c__4148__auto___36594);
var G__36598 = 0;
seq__36579_36583 = G__36595;
chunk__36580_36584 = G__36596;
count__36581_36585 = G__36597;
i__36582_36586 = G__36598;
continue;
}
} else
{var n_36599 = cljs.core.first.call(null,seq__36579_36593__$1);n_36599.removeAttribute(cljs.core.name.call(null,name));
{
var G__36600 = cljs.core.next.call(null,seq__36579_36593__$1);
var G__36601 = null;
var G__36602 = 0;
var G__36603 = 0;
seq__36579_36583 = G__36600;
chunk__36580_36584 = G__36601;
count__36581_36585 = G__36602;
i__36582_36586 = G__36603;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36605 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36605,0,null);var v = cljs.core.nth.call(null,vec__36605,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36606_SHARP_){var attr = attrs__$1.item(p1__36606_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36613_36619 = cljs.core.seq.call(null,styles);var chunk__36614_36620 = null;var count__36615_36621 = 0;var i__36616_36622 = 0;while(true){
if((i__36616_36622 < count__36615_36621))
{var vec__36617_36623 = cljs.core._nth.call(null,chunk__36614_36620,i__36616_36622);var name_36624 = cljs.core.nth.call(null,vec__36617_36623,0,null);var value_36625 = cljs.core.nth.call(null,vec__36617_36623,1,null);domina.set_style_BANG_.call(null,content,name_36624,value_36625);
{
var G__36626 = seq__36613_36619;
var G__36627 = chunk__36614_36620;
var G__36628 = count__36615_36621;
var G__36629 = (i__36616_36622 + 1);
seq__36613_36619 = G__36626;
chunk__36614_36620 = G__36627;
count__36615_36621 = G__36628;
i__36616_36622 = G__36629;
continue;
}
} else
{var temp__4092__auto___36630 = cljs.core.seq.call(null,seq__36613_36619);if(temp__4092__auto___36630)
{var seq__36613_36631__$1 = temp__4092__auto___36630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36613_36631__$1))
{var c__4148__auto___36632 = cljs.core.chunk_first.call(null,seq__36613_36631__$1);{
var G__36633 = cljs.core.chunk_rest.call(null,seq__36613_36631__$1);
var G__36634 = c__4148__auto___36632;
var G__36635 = cljs.core.count.call(null,c__4148__auto___36632);
var G__36636 = 0;
seq__36613_36619 = G__36633;
chunk__36614_36620 = G__36634;
count__36615_36621 = G__36635;
i__36616_36622 = G__36636;
continue;
}
} else
{var vec__36618_36637 = cljs.core.first.call(null,seq__36613_36631__$1);var name_36638 = cljs.core.nth.call(null,vec__36618_36637,0,null);var value_36639 = cljs.core.nth.call(null,vec__36618_36637,1,null);domina.set_style_BANG_.call(null,content,name_36638,value_36639);
{
var G__36640 = cljs.core.next.call(null,seq__36613_36631__$1);
var G__36641 = null;
var G__36642 = 0;
var G__36643 = 0;
seq__36613_36619 = G__36640;
chunk__36614_36620 = G__36641;
count__36615_36621 = G__36642;
i__36616_36622 = G__36643;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36650_36656 = cljs.core.seq.call(null,attrs);var chunk__36651_36657 = null;var count__36652_36658 = 0;var i__36653_36659 = 0;while(true){
if((i__36653_36659 < count__36652_36658))
{var vec__36654_36660 = cljs.core._nth.call(null,chunk__36651_36657,i__36653_36659);var name_36661 = cljs.core.nth.call(null,vec__36654_36660,0,null);var value_36662 = cljs.core.nth.call(null,vec__36654_36660,1,null);domina.set_attr_BANG_.call(null,content,name_36661,value_36662);
{
var G__36663 = seq__36650_36656;
var G__36664 = chunk__36651_36657;
var G__36665 = count__36652_36658;
var G__36666 = (i__36653_36659 + 1);
seq__36650_36656 = G__36663;
chunk__36651_36657 = G__36664;
count__36652_36658 = G__36665;
i__36653_36659 = G__36666;
continue;
}
} else
{var temp__4092__auto___36667 = cljs.core.seq.call(null,seq__36650_36656);if(temp__4092__auto___36667)
{var seq__36650_36668__$1 = temp__4092__auto___36667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36650_36668__$1))
{var c__4148__auto___36669 = cljs.core.chunk_first.call(null,seq__36650_36668__$1);{
var G__36670 = cljs.core.chunk_rest.call(null,seq__36650_36668__$1);
var G__36671 = c__4148__auto___36669;
var G__36672 = cljs.core.count.call(null,c__4148__auto___36669);
var G__36673 = 0;
seq__36650_36656 = G__36670;
chunk__36651_36657 = G__36671;
count__36652_36658 = G__36672;
i__36653_36659 = G__36673;
continue;
}
} else
{var vec__36655_36674 = cljs.core.first.call(null,seq__36650_36668__$1);var name_36675 = cljs.core.nth.call(null,vec__36655_36674,0,null);var value_36676 = cljs.core.nth.call(null,vec__36655_36674,1,null);domina.set_attr_BANG_.call(null,content,name_36675,value_36676);
{
var G__36677 = cljs.core.next.call(null,seq__36650_36668__$1);
var G__36678 = null;
var G__36679 = 0;
var G__36680 = 0;
seq__36650_36656 = G__36677;
chunk__36651_36657 = G__36678;
count__36652_36658 = G__36679;
i__36653_36659 = G__36680;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36685_36689 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36686_36690 = null;var count__36687_36691 = 0;var i__36688_36692 = 0;while(true){
if((i__36688_36692 < count__36687_36691))
{var node_36693 = cljs.core._nth.call(null,chunk__36686_36690,i__36688_36692);goog.dom.classes.add(node_36693,class$);
{
var G__36694 = seq__36685_36689;
var G__36695 = chunk__36686_36690;
var G__36696 = count__36687_36691;
var G__36697 = (i__36688_36692 + 1);
seq__36685_36689 = G__36694;
chunk__36686_36690 = G__36695;
count__36687_36691 = G__36696;
i__36688_36692 = G__36697;
continue;
}
} else
{var temp__4092__auto___36698 = cljs.core.seq.call(null,seq__36685_36689);if(temp__4092__auto___36698)
{var seq__36685_36699__$1 = temp__4092__auto___36698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36685_36699__$1))
{var c__4148__auto___36700 = cljs.core.chunk_first.call(null,seq__36685_36699__$1);{
var G__36701 = cljs.core.chunk_rest.call(null,seq__36685_36699__$1);
var G__36702 = c__4148__auto___36700;
var G__36703 = cljs.core.count.call(null,c__4148__auto___36700);
var G__36704 = 0;
seq__36685_36689 = G__36701;
chunk__36686_36690 = G__36702;
count__36687_36691 = G__36703;
i__36688_36692 = G__36704;
continue;
}
} else
{var node_36705 = cljs.core.first.call(null,seq__36685_36699__$1);goog.dom.classes.add(node_36705,class$);
{
var G__36706 = cljs.core.next.call(null,seq__36685_36699__$1);
var G__36707 = null;
var G__36708 = 0;
var G__36709 = 0;
seq__36685_36689 = G__36706;
chunk__36686_36690 = G__36707;
count__36687_36691 = G__36708;
i__36688_36692 = G__36709;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36714_36718 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36715_36719 = null;var count__36716_36720 = 0;var i__36717_36721 = 0;while(true){
if((i__36717_36721 < count__36716_36720))
{var node_36722 = cljs.core._nth.call(null,chunk__36715_36719,i__36717_36721);goog.dom.classes.remove(node_36722,class$);
{
var G__36723 = seq__36714_36718;
var G__36724 = chunk__36715_36719;
var G__36725 = count__36716_36720;
var G__36726 = (i__36717_36721 + 1);
seq__36714_36718 = G__36723;
chunk__36715_36719 = G__36724;
count__36716_36720 = G__36725;
i__36717_36721 = G__36726;
continue;
}
} else
{var temp__4092__auto___36727 = cljs.core.seq.call(null,seq__36714_36718);if(temp__4092__auto___36727)
{var seq__36714_36728__$1 = temp__4092__auto___36727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36714_36728__$1))
{var c__4148__auto___36729 = cljs.core.chunk_first.call(null,seq__36714_36728__$1);{
var G__36730 = cljs.core.chunk_rest.call(null,seq__36714_36728__$1);
var G__36731 = c__4148__auto___36729;
var G__36732 = cljs.core.count.call(null,c__4148__auto___36729);
var G__36733 = 0;
seq__36714_36718 = G__36730;
chunk__36715_36719 = G__36731;
count__36716_36720 = G__36732;
i__36717_36721 = G__36733;
continue;
}
} else
{var node_36734 = cljs.core.first.call(null,seq__36714_36728__$1);goog.dom.classes.remove(node_36734,class$);
{
var G__36735 = cljs.core.next.call(null,seq__36714_36728__$1);
var G__36736 = null;
var G__36737 = 0;
var G__36738 = 0;
seq__36714_36718 = G__36735;
chunk__36715_36719 = G__36736;
count__36716_36720 = G__36737;
i__36717_36721 = G__36738;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36743_36747 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36744_36748 = null;var count__36745_36749 = 0;var i__36746_36750 = 0;while(true){
if((i__36746_36750 < count__36745_36749))
{var node_36751 = cljs.core._nth.call(null,chunk__36744_36748,i__36746_36750);goog.dom.classes.toggle(node_36751,class$);
{
var G__36752 = seq__36743_36747;
var G__36753 = chunk__36744_36748;
var G__36754 = count__36745_36749;
var G__36755 = (i__36746_36750 + 1);
seq__36743_36747 = G__36752;
chunk__36744_36748 = G__36753;
count__36745_36749 = G__36754;
i__36746_36750 = G__36755;
continue;
}
} else
{var temp__4092__auto___36756 = cljs.core.seq.call(null,seq__36743_36747);if(temp__4092__auto___36756)
{var seq__36743_36757__$1 = temp__4092__auto___36756;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36743_36757__$1))
{var c__4148__auto___36758 = cljs.core.chunk_first.call(null,seq__36743_36757__$1);{
var G__36759 = cljs.core.chunk_rest.call(null,seq__36743_36757__$1);
var G__36760 = c__4148__auto___36758;
var G__36761 = cljs.core.count.call(null,c__4148__auto___36758);
var G__36762 = 0;
seq__36743_36747 = G__36759;
chunk__36744_36748 = G__36760;
count__36745_36749 = G__36761;
i__36746_36750 = G__36762;
continue;
}
} else
{var node_36763 = cljs.core.first.call(null,seq__36743_36757__$1);goog.dom.classes.toggle(node_36763,class$);
{
var G__36764 = cljs.core.next.call(null,seq__36743_36757__$1);
var G__36765 = null;
var G__36766 = 0;
var G__36767 = 0;
seq__36743_36747 = G__36764;
chunk__36744_36748 = G__36765;
count__36745_36749 = G__36766;
i__36746_36750 = G__36767;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36776__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36772_36777 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36773_36778 = null;var count__36774_36779 = 0;var i__36775_36780 = 0;while(true){
if((i__36775_36780 < count__36774_36779))
{var node_36781 = cljs.core._nth.call(null,chunk__36773_36778,i__36775_36780);goog.dom.classes.set(node_36781,classes_36776__$1);
{
var G__36782 = seq__36772_36777;
var G__36783 = chunk__36773_36778;
var G__36784 = count__36774_36779;
var G__36785 = (i__36775_36780 + 1);
seq__36772_36777 = G__36782;
chunk__36773_36778 = G__36783;
count__36774_36779 = G__36784;
i__36775_36780 = G__36785;
continue;
}
} else
{var temp__4092__auto___36786 = cljs.core.seq.call(null,seq__36772_36777);if(temp__4092__auto___36786)
{var seq__36772_36787__$1 = temp__4092__auto___36786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36772_36787__$1))
{var c__4148__auto___36788 = cljs.core.chunk_first.call(null,seq__36772_36787__$1);{
var G__36789 = cljs.core.chunk_rest.call(null,seq__36772_36787__$1);
var G__36790 = c__4148__auto___36788;
var G__36791 = cljs.core.count.call(null,c__4148__auto___36788);
var G__36792 = 0;
seq__36772_36777 = G__36789;
chunk__36773_36778 = G__36790;
count__36774_36779 = G__36791;
i__36775_36780 = G__36792;
continue;
}
} else
{var node_36793 = cljs.core.first.call(null,seq__36772_36787__$1);goog.dom.classes.set(node_36793,classes_36776__$1);
{
var G__36794 = cljs.core.next.call(null,seq__36772_36787__$1);
var G__36795 = null;
var G__36796 = 0;
var G__36797 = 0;
seq__36772_36777 = G__36794;
chunk__36773_36778 = G__36795;
count__36774_36779 = G__36796;
i__36775_36780 = G__36797;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36802_36806 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36803_36807 = null;var count__36804_36808 = 0;var i__36805_36809 = 0;while(true){
if((i__36805_36809 < count__36804_36808))
{var node_36810 = cljs.core._nth.call(null,chunk__36803_36807,i__36805_36809);goog.dom.setTextContent(node_36810,value);
{
var G__36811 = seq__36802_36806;
var G__36812 = chunk__36803_36807;
var G__36813 = count__36804_36808;
var G__36814 = (i__36805_36809 + 1);
seq__36802_36806 = G__36811;
chunk__36803_36807 = G__36812;
count__36804_36808 = G__36813;
i__36805_36809 = G__36814;
continue;
}
} else
{var temp__4092__auto___36815 = cljs.core.seq.call(null,seq__36802_36806);if(temp__4092__auto___36815)
{var seq__36802_36816__$1 = temp__4092__auto___36815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36802_36816__$1))
{var c__4148__auto___36817 = cljs.core.chunk_first.call(null,seq__36802_36816__$1);{
var G__36818 = cljs.core.chunk_rest.call(null,seq__36802_36816__$1);
var G__36819 = c__4148__auto___36817;
var G__36820 = cljs.core.count.call(null,c__4148__auto___36817);
var G__36821 = 0;
seq__36802_36806 = G__36818;
chunk__36803_36807 = G__36819;
count__36804_36808 = G__36820;
i__36805_36809 = G__36821;
continue;
}
} else
{var node_36822 = cljs.core.first.call(null,seq__36802_36816__$1);goog.dom.setTextContent(node_36822,value);
{
var G__36823 = cljs.core.next.call(null,seq__36802_36816__$1);
var G__36824 = null;
var G__36825 = 0;
var G__36826 = 0;
seq__36802_36806 = G__36823;
chunk__36803_36807 = G__36824;
count__36804_36808 = G__36825;
i__36805_36809 = G__36826;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36831_36835 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36832_36836 = null;var count__36833_36837 = 0;var i__36834_36838 = 0;while(true){
if((i__36834_36838 < count__36833_36837))
{var node_36839 = cljs.core._nth.call(null,chunk__36832_36836,i__36834_36838);goog.dom.forms.setValue(node_36839,value);
{
var G__36840 = seq__36831_36835;
var G__36841 = chunk__36832_36836;
var G__36842 = count__36833_36837;
var G__36843 = (i__36834_36838 + 1);
seq__36831_36835 = G__36840;
chunk__36832_36836 = G__36841;
count__36833_36837 = G__36842;
i__36834_36838 = G__36843;
continue;
}
} else
{var temp__4092__auto___36844 = cljs.core.seq.call(null,seq__36831_36835);if(temp__4092__auto___36844)
{var seq__36831_36845__$1 = temp__4092__auto___36844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36831_36845__$1))
{var c__4148__auto___36846 = cljs.core.chunk_first.call(null,seq__36831_36845__$1);{
var G__36847 = cljs.core.chunk_rest.call(null,seq__36831_36845__$1);
var G__36848 = c__4148__auto___36846;
var G__36849 = cljs.core.count.call(null,c__4148__auto___36846);
var G__36850 = 0;
seq__36831_36835 = G__36847;
chunk__36832_36836 = G__36848;
count__36833_36837 = G__36849;
i__36834_36838 = G__36850;
continue;
}
} else
{var node_36851 = cljs.core.first.call(null,seq__36831_36845__$1);goog.dom.forms.setValue(node_36851,value);
{
var G__36852 = cljs.core.next.call(null,seq__36831_36845__$1);
var G__36853 = null;
var G__36854 = 0;
var G__36855 = 0;
seq__36831_36835 = G__36852;
chunk__36832_36836 = G__36853;
count__36833_36837 = G__36854;
i__36834_36838 = G__36855;
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
{var value_36866 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36862_36867 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36863_36868 = null;var count__36864_36869 = 0;var i__36865_36870 = 0;while(true){
if((i__36865_36870 < count__36864_36869))
{var node_36871 = cljs.core._nth.call(null,chunk__36863_36868,i__36865_36870);node_36871.innerHTML = value_36866;
{
var G__36872 = seq__36862_36867;
var G__36873 = chunk__36863_36868;
var G__36874 = count__36864_36869;
var G__36875 = (i__36865_36870 + 1);
seq__36862_36867 = G__36872;
chunk__36863_36868 = G__36873;
count__36864_36869 = G__36874;
i__36865_36870 = G__36875;
continue;
}
} else
{var temp__4092__auto___36876 = cljs.core.seq.call(null,seq__36862_36867);if(temp__4092__auto___36876)
{var seq__36862_36877__$1 = temp__4092__auto___36876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36862_36877__$1))
{var c__4148__auto___36878 = cljs.core.chunk_first.call(null,seq__36862_36877__$1);{
var G__36879 = cljs.core.chunk_rest.call(null,seq__36862_36877__$1);
var G__36880 = c__4148__auto___36878;
var G__36881 = cljs.core.count.call(null,c__4148__auto___36878);
var G__36882 = 0;
seq__36862_36867 = G__36879;
chunk__36863_36868 = G__36880;
count__36864_36869 = G__36881;
i__36865_36870 = G__36882;
continue;
}
} else
{var node_36883 = cljs.core.first.call(null,seq__36862_36877__$1);node_36883.innerHTML = value_36866;
{
var G__36884 = cljs.core.next.call(null,seq__36862_36877__$1);
var G__36885 = null;
var G__36886 = 0;
var G__36887 = 0;
seq__36862_36867 = G__36884;
chunk__36863_36868 = G__36885;
count__36864_36869 = G__36886;
i__36865_36870 = G__36887;
continue;
}
}
} else
{}
}
break;
}
}catch (e36861){if((e36861 instanceof Error))
{var e_36888 = e36861;domina.replace_children_BANG_.call(null,content,value_36866);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36861;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36895_36899 = cljs.core.seq.call(null,children);var chunk__36896_36900 = null;var count__36897_36901 = 0;var i__36898_36902 = 0;while(true){
if((i__36898_36902 < count__36897_36901))
{var child_36903 = cljs.core._nth.call(null,chunk__36896_36900,i__36898_36902);frag.appendChild(child_36903);
{
var G__36904 = seq__36895_36899;
var G__36905 = chunk__36896_36900;
var G__36906 = count__36897_36901;
var G__36907 = (i__36898_36902 + 1);
seq__36895_36899 = G__36904;
chunk__36896_36900 = G__36905;
count__36897_36901 = G__36906;
i__36898_36902 = G__36907;
continue;
}
} else
{var temp__4092__auto___36908 = cljs.core.seq.call(null,seq__36895_36899);if(temp__4092__auto___36908)
{var seq__36895_36909__$1 = temp__4092__auto___36908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36895_36909__$1))
{var c__4148__auto___36910 = cljs.core.chunk_first.call(null,seq__36895_36909__$1);{
var G__36911 = cljs.core.chunk_rest.call(null,seq__36895_36909__$1);
var G__36912 = c__4148__auto___36910;
var G__36913 = cljs.core.count.call(null,c__4148__auto___36910);
var G__36914 = 0;
seq__36895_36899 = G__36911;
chunk__36896_36900 = G__36912;
count__36897_36901 = G__36913;
i__36898_36902 = G__36914;
continue;
}
} else
{var child_36915 = cljs.core.first.call(null,seq__36895_36909__$1);frag.appendChild(child_36915);
{
var G__36916 = cljs.core.next.call(null,seq__36895_36909__$1);
var G__36917 = null;
var G__36918 = 0;
var G__36919 = 0;
seq__36895_36899 = G__36916;
chunk__36896_36900 = G__36917;
count__36897_36901 = G__36918;
i__36898_36902 = G__36919;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36889_SHARP_,p2__36890_SHARP_){return f.call(null,p1__36889_SHARP_,p2__36890_SHARP_);
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
{if((function (){var G__36921 = list_thing;if(G__36921)
{var bit__4050__auto__ = (G__36921.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36921.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36921.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36921);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36921);
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
{if((function (){var G__36922 = content;if(G__36922)
{var bit__4050__auto__ = (G__36922.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36922.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36922.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36922);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36922);
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
{if((function (){var G__36923 = content;if(G__36923)
{var bit__4050__auto__ = (G__36923.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36923.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36923.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36923);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36923);
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
