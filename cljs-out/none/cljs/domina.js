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
var opt_wrapper_16431 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16432 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16433 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16432,table_section_wrapper_16432,opt_wrapper_16431,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16433,table_section_wrapper_16432,cell_wrapper_16433,opt_wrapper_16431,table_section_wrapper_16432,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16432]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16438 = cljs.core.seq.call(null,tbody);var chunk__16439 = null;var count__16440 = 0;var i__16441 = 0;while(true){
if((i__16441 < count__16440))
{var child = cljs.core._nth.call(null,chunk__16439,i__16441);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16442 = seq__16438;
var G__16443 = chunk__16439;
var G__16444 = count__16440;
var G__16445 = (i__16441 + 1);
seq__16438 = G__16442;
chunk__16439 = G__16443;
count__16440 = G__16444;
i__16441 = G__16445;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16438);if(temp__4092__auto__)
{var seq__16438__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16438__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16438__$1);{
var G__16446 = cljs.core.chunk_rest.call(null,seq__16438__$1);
var G__16447 = c__4148__auto__;
var G__16448 = cljs.core.count.call(null,c__4148__auto__);
var G__16449 = 0;
seq__16438 = G__16446;
chunk__16439 = G__16447;
count__16440 = G__16448;
i__16441 = G__16449;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16438__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16450 = cljs.core.next.call(null,seq__16438__$1);
var G__16451 = null;
var G__16452 = 0;
var G__16453 = 0;
seq__16438 = G__16450;
chunk__16439 = G__16451;
count__16440 = G__16452;
i__16441 = G__16453;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16455 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16455,0,null);var start_wrap = cljs.core.nth.call(null,vec__16455,1,null);var end_wrap = cljs.core.nth.call(null,vec__16455,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16456 = wrapper.lastChild;
var G__16457 = (level - 1);
wrapper = G__16456;
level = G__16457;
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
domina.DomContent = (function (){var obj16459 = {};return obj16459;
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
log_debug.cljs$lang$applyTo = (function (arglist__16460){
var mesg = cljs.core.seq(arglist__16460);
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
log.cljs$lang$applyTo = (function (arglist__16461){
var mesg = cljs.core.seq(arglist__16461);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16462){
var contents = cljs.core.seq(arglist__16462);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16463_SHARP_){return p1__16463_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16464_SHARP_,p2__16465_SHARP_){return goog.dom.insertChildAt(p1__16464_SHARP_,p2__16465_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16467_SHARP_,p2__16466_SHARP_){return goog.dom.insertSiblingBefore(p2__16466_SHARP_,p1__16467_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16469_SHARP_,p2__16468_SHARP_){return goog.dom.insertSiblingAfter(p2__16468_SHARP_,p1__16469_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16471_SHARP_,p2__16470_SHARP_){return goog.dom.replaceNode(p2__16470_SHARP_,p1__16471_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16476_16480 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16477_16481 = null;var count__16478_16482 = 0;var i__16479_16483 = 0;while(true){
if((i__16479_16483 < count__16478_16482))
{var n_16484 = cljs.core._nth.call(null,chunk__16477_16481,i__16479_16483);goog.style.setStyle(n_16484,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16485 = seq__16476_16480;
var G__16486 = chunk__16477_16481;
var G__16487 = count__16478_16482;
var G__16488 = (i__16479_16483 + 1);
seq__16476_16480 = G__16485;
chunk__16477_16481 = G__16486;
count__16478_16482 = G__16487;
i__16479_16483 = G__16488;
continue;
}
} else
{var temp__4092__auto___16489 = cljs.core.seq.call(null,seq__16476_16480);if(temp__4092__auto___16489)
{var seq__16476_16490__$1 = temp__4092__auto___16489;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16476_16490__$1))
{var c__4148__auto___16491 = cljs.core.chunk_first.call(null,seq__16476_16490__$1);{
var G__16492 = cljs.core.chunk_rest.call(null,seq__16476_16490__$1);
var G__16493 = c__4148__auto___16491;
var G__16494 = cljs.core.count.call(null,c__4148__auto___16491);
var G__16495 = 0;
seq__16476_16480 = G__16492;
chunk__16477_16481 = G__16493;
count__16478_16482 = G__16494;
i__16479_16483 = G__16495;
continue;
}
} else
{var n_16496 = cljs.core.first.call(null,seq__16476_16490__$1);goog.style.setStyle(n_16496,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16497 = cljs.core.next.call(null,seq__16476_16490__$1);
var G__16498 = null;
var G__16499 = 0;
var G__16500 = 0;
seq__16476_16480 = G__16497;
chunk__16477_16481 = G__16498;
count__16478_16482 = G__16499;
i__16479_16483 = G__16500;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16501){
var content = cljs.core.first(arglist__16501);
arglist__16501 = cljs.core.next(arglist__16501);
var name = cljs.core.first(arglist__16501);
var value = cljs.core.rest(arglist__16501);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16506_16510 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16507_16511 = null;var count__16508_16512 = 0;var i__16509_16513 = 0;while(true){
if((i__16509_16513 < count__16508_16512))
{var n_16514 = cljs.core._nth.call(null,chunk__16507_16511,i__16509_16513);n_16514.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16515 = seq__16506_16510;
var G__16516 = chunk__16507_16511;
var G__16517 = count__16508_16512;
var G__16518 = (i__16509_16513 + 1);
seq__16506_16510 = G__16515;
chunk__16507_16511 = G__16516;
count__16508_16512 = G__16517;
i__16509_16513 = G__16518;
continue;
}
} else
{var temp__4092__auto___16519 = cljs.core.seq.call(null,seq__16506_16510);if(temp__4092__auto___16519)
{var seq__16506_16520__$1 = temp__4092__auto___16519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16506_16520__$1))
{var c__4148__auto___16521 = cljs.core.chunk_first.call(null,seq__16506_16520__$1);{
var G__16522 = cljs.core.chunk_rest.call(null,seq__16506_16520__$1);
var G__16523 = c__4148__auto___16521;
var G__16524 = cljs.core.count.call(null,c__4148__auto___16521);
var G__16525 = 0;
seq__16506_16510 = G__16522;
chunk__16507_16511 = G__16523;
count__16508_16512 = G__16524;
i__16509_16513 = G__16525;
continue;
}
} else
{var n_16526 = cljs.core.first.call(null,seq__16506_16520__$1);n_16526.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16527 = cljs.core.next.call(null,seq__16506_16520__$1);
var G__16528 = null;
var G__16529 = 0;
var G__16530 = 0;
seq__16506_16510 = G__16527;
chunk__16507_16511 = G__16528;
count__16508_16512 = G__16529;
i__16509_16513 = G__16530;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16531){
var content = cljs.core.first(arglist__16531);
arglist__16531 = cljs.core.next(arglist__16531);
var name = cljs.core.first(arglist__16531);
var value = cljs.core.rest(arglist__16531);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16536_16540 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16537_16541 = null;var count__16538_16542 = 0;var i__16539_16543 = 0;while(true){
if((i__16539_16543 < count__16538_16542))
{var n_16544 = cljs.core._nth.call(null,chunk__16537_16541,i__16539_16543);n_16544.removeAttribute(cljs.core.name.call(null,name));
{
var G__16545 = seq__16536_16540;
var G__16546 = chunk__16537_16541;
var G__16547 = count__16538_16542;
var G__16548 = (i__16539_16543 + 1);
seq__16536_16540 = G__16545;
chunk__16537_16541 = G__16546;
count__16538_16542 = G__16547;
i__16539_16543 = G__16548;
continue;
}
} else
{var temp__4092__auto___16549 = cljs.core.seq.call(null,seq__16536_16540);if(temp__4092__auto___16549)
{var seq__16536_16550__$1 = temp__4092__auto___16549;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16536_16550__$1))
{var c__4148__auto___16551 = cljs.core.chunk_first.call(null,seq__16536_16550__$1);{
var G__16552 = cljs.core.chunk_rest.call(null,seq__16536_16550__$1);
var G__16553 = c__4148__auto___16551;
var G__16554 = cljs.core.count.call(null,c__4148__auto___16551);
var G__16555 = 0;
seq__16536_16540 = G__16552;
chunk__16537_16541 = G__16553;
count__16538_16542 = G__16554;
i__16539_16543 = G__16555;
continue;
}
} else
{var n_16556 = cljs.core.first.call(null,seq__16536_16550__$1);n_16556.removeAttribute(cljs.core.name.call(null,name));
{
var G__16557 = cljs.core.next.call(null,seq__16536_16550__$1);
var G__16558 = null;
var G__16559 = 0;
var G__16560 = 0;
seq__16536_16540 = G__16557;
chunk__16537_16541 = G__16558;
count__16538_16542 = G__16559;
i__16539_16543 = G__16560;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16562 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16562,0,null);var v = cljs.core.nth.call(null,vec__16562,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16563_SHARP_){var attr = attrs__$1.item(p1__16563_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16570_16576 = cljs.core.seq.call(null,styles);var chunk__16571_16577 = null;var count__16572_16578 = 0;var i__16573_16579 = 0;while(true){
if((i__16573_16579 < count__16572_16578))
{var vec__16574_16580 = cljs.core._nth.call(null,chunk__16571_16577,i__16573_16579);var name_16581 = cljs.core.nth.call(null,vec__16574_16580,0,null);var value_16582 = cljs.core.nth.call(null,vec__16574_16580,1,null);domina.set_style_BANG_.call(null,content,name_16581,value_16582);
{
var G__16583 = seq__16570_16576;
var G__16584 = chunk__16571_16577;
var G__16585 = count__16572_16578;
var G__16586 = (i__16573_16579 + 1);
seq__16570_16576 = G__16583;
chunk__16571_16577 = G__16584;
count__16572_16578 = G__16585;
i__16573_16579 = G__16586;
continue;
}
} else
{var temp__4092__auto___16587 = cljs.core.seq.call(null,seq__16570_16576);if(temp__4092__auto___16587)
{var seq__16570_16588__$1 = temp__4092__auto___16587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16570_16588__$1))
{var c__4148__auto___16589 = cljs.core.chunk_first.call(null,seq__16570_16588__$1);{
var G__16590 = cljs.core.chunk_rest.call(null,seq__16570_16588__$1);
var G__16591 = c__4148__auto___16589;
var G__16592 = cljs.core.count.call(null,c__4148__auto___16589);
var G__16593 = 0;
seq__16570_16576 = G__16590;
chunk__16571_16577 = G__16591;
count__16572_16578 = G__16592;
i__16573_16579 = G__16593;
continue;
}
} else
{var vec__16575_16594 = cljs.core.first.call(null,seq__16570_16588__$1);var name_16595 = cljs.core.nth.call(null,vec__16575_16594,0,null);var value_16596 = cljs.core.nth.call(null,vec__16575_16594,1,null);domina.set_style_BANG_.call(null,content,name_16595,value_16596);
{
var G__16597 = cljs.core.next.call(null,seq__16570_16588__$1);
var G__16598 = null;
var G__16599 = 0;
var G__16600 = 0;
seq__16570_16576 = G__16597;
chunk__16571_16577 = G__16598;
count__16572_16578 = G__16599;
i__16573_16579 = G__16600;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16607_16613 = cljs.core.seq.call(null,attrs);var chunk__16608_16614 = null;var count__16609_16615 = 0;var i__16610_16616 = 0;while(true){
if((i__16610_16616 < count__16609_16615))
{var vec__16611_16617 = cljs.core._nth.call(null,chunk__16608_16614,i__16610_16616);var name_16618 = cljs.core.nth.call(null,vec__16611_16617,0,null);var value_16619 = cljs.core.nth.call(null,vec__16611_16617,1,null);domina.set_attr_BANG_.call(null,content,name_16618,value_16619);
{
var G__16620 = seq__16607_16613;
var G__16621 = chunk__16608_16614;
var G__16622 = count__16609_16615;
var G__16623 = (i__16610_16616 + 1);
seq__16607_16613 = G__16620;
chunk__16608_16614 = G__16621;
count__16609_16615 = G__16622;
i__16610_16616 = G__16623;
continue;
}
} else
{var temp__4092__auto___16624 = cljs.core.seq.call(null,seq__16607_16613);if(temp__4092__auto___16624)
{var seq__16607_16625__$1 = temp__4092__auto___16624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16607_16625__$1))
{var c__4148__auto___16626 = cljs.core.chunk_first.call(null,seq__16607_16625__$1);{
var G__16627 = cljs.core.chunk_rest.call(null,seq__16607_16625__$1);
var G__16628 = c__4148__auto___16626;
var G__16629 = cljs.core.count.call(null,c__4148__auto___16626);
var G__16630 = 0;
seq__16607_16613 = G__16627;
chunk__16608_16614 = G__16628;
count__16609_16615 = G__16629;
i__16610_16616 = G__16630;
continue;
}
} else
{var vec__16612_16631 = cljs.core.first.call(null,seq__16607_16625__$1);var name_16632 = cljs.core.nth.call(null,vec__16612_16631,0,null);var value_16633 = cljs.core.nth.call(null,vec__16612_16631,1,null);domina.set_attr_BANG_.call(null,content,name_16632,value_16633);
{
var G__16634 = cljs.core.next.call(null,seq__16607_16625__$1);
var G__16635 = null;
var G__16636 = 0;
var G__16637 = 0;
seq__16607_16613 = G__16634;
chunk__16608_16614 = G__16635;
count__16609_16615 = G__16636;
i__16610_16616 = G__16637;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16642_16646 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16643_16647 = null;var count__16644_16648 = 0;var i__16645_16649 = 0;while(true){
if((i__16645_16649 < count__16644_16648))
{var node_16650 = cljs.core._nth.call(null,chunk__16643_16647,i__16645_16649);goog.dom.classes.add(node_16650,class$);
{
var G__16651 = seq__16642_16646;
var G__16652 = chunk__16643_16647;
var G__16653 = count__16644_16648;
var G__16654 = (i__16645_16649 + 1);
seq__16642_16646 = G__16651;
chunk__16643_16647 = G__16652;
count__16644_16648 = G__16653;
i__16645_16649 = G__16654;
continue;
}
} else
{var temp__4092__auto___16655 = cljs.core.seq.call(null,seq__16642_16646);if(temp__4092__auto___16655)
{var seq__16642_16656__$1 = temp__4092__auto___16655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16642_16656__$1))
{var c__4148__auto___16657 = cljs.core.chunk_first.call(null,seq__16642_16656__$1);{
var G__16658 = cljs.core.chunk_rest.call(null,seq__16642_16656__$1);
var G__16659 = c__4148__auto___16657;
var G__16660 = cljs.core.count.call(null,c__4148__auto___16657);
var G__16661 = 0;
seq__16642_16646 = G__16658;
chunk__16643_16647 = G__16659;
count__16644_16648 = G__16660;
i__16645_16649 = G__16661;
continue;
}
} else
{var node_16662 = cljs.core.first.call(null,seq__16642_16656__$1);goog.dom.classes.add(node_16662,class$);
{
var G__16663 = cljs.core.next.call(null,seq__16642_16656__$1);
var G__16664 = null;
var G__16665 = 0;
var G__16666 = 0;
seq__16642_16646 = G__16663;
chunk__16643_16647 = G__16664;
count__16644_16648 = G__16665;
i__16645_16649 = G__16666;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16671_16675 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16672_16676 = null;var count__16673_16677 = 0;var i__16674_16678 = 0;while(true){
if((i__16674_16678 < count__16673_16677))
{var node_16679 = cljs.core._nth.call(null,chunk__16672_16676,i__16674_16678);goog.dom.classes.remove(node_16679,class$);
{
var G__16680 = seq__16671_16675;
var G__16681 = chunk__16672_16676;
var G__16682 = count__16673_16677;
var G__16683 = (i__16674_16678 + 1);
seq__16671_16675 = G__16680;
chunk__16672_16676 = G__16681;
count__16673_16677 = G__16682;
i__16674_16678 = G__16683;
continue;
}
} else
{var temp__4092__auto___16684 = cljs.core.seq.call(null,seq__16671_16675);if(temp__4092__auto___16684)
{var seq__16671_16685__$1 = temp__4092__auto___16684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16671_16685__$1))
{var c__4148__auto___16686 = cljs.core.chunk_first.call(null,seq__16671_16685__$1);{
var G__16687 = cljs.core.chunk_rest.call(null,seq__16671_16685__$1);
var G__16688 = c__4148__auto___16686;
var G__16689 = cljs.core.count.call(null,c__4148__auto___16686);
var G__16690 = 0;
seq__16671_16675 = G__16687;
chunk__16672_16676 = G__16688;
count__16673_16677 = G__16689;
i__16674_16678 = G__16690;
continue;
}
} else
{var node_16691 = cljs.core.first.call(null,seq__16671_16685__$1);goog.dom.classes.remove(node_16691,class$);
{
var G__16692 = cljs.core.next.call(null,seq__16671_16685__$1);
var G__16693 = null;
var G__16694 = 0;
var G__16695 = 0;
seq__16671_16675 = G__16692;
chunk__16672_16676 = G__16693;
count__16673_16677 = G__16694;
i__16674_16678 = G__16695;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16700_16704 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16701_16705 = null;var count__16702_16706 = 0;var i__16703_16707 = 0;while(true){
if((i__16703_16707 < count__16702_16706))
{var node_16708 = cljs.core._nth.call(null,chunk__16701_16705,i__16703_16707);goog.dom.classes.toggle(node_16708,class$);
{
var G__16709 = seq__16700_16704;
var G__16710 = chunk__16701_16705;
var G__16711 = count__16702_16706;
var G__16712 = (i__16703_16707 + 1);
seq__16700_16704 = G__16709;
chunk__16701_16705 = G__16710;
count__16702_16706 = G__16711;
i__16703_16707 = G__16712;
continue;
}
} else
{var temp__4092__auto___16713 = cljs.core.seq.call(null,seq__16700_16704);if(temp__4092__auto___16713)
{var seq__16700_16714__$1 = temp__4092__auto___16713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16700_16714__$1))
{var c__4148__auto___16715 = cljs.core.chunk_first.call(null,seq__16700_16714__$1);{
var G__16716 = cljs.core.chunk_rest.call(null,seq__16700_16714__$1);
var G__16717 = c__4148__auto___16715;
var G__16718 = cljs.core.count.call(null,c__4148__auto___16715);
var G__16719 = 0;
seq__16700_16704 = G__16716;
chunk__16701_16705 = G__16717;
count__16702_16706 = G__16718;
i__16703_16707 = G__16719;
continue;
}
} else
{var node_16720 = cljs.core.first.call(null,seq__16700_16714__$1);goog.dom.classes.toggle(node_16720,class$);
{
var G__16721 = cljs.core.next.call(null,seq__16700_16714__$1);
var G__16722 = null;
var G__16723 = 0;
var G__16724 = 0;
seq__16700_16704 = G__16721;
chunk__16701_16705 = G__16722;
count__16702_16706 = G__16723;
i__16703_16707 = G__16724;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16733__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16729_16734 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16730_16735 = null;var count__16731_16736 = 0;var i__16732_16737 = 0;while(true){
if((i__16732_16737 < count__16731_16736))
{var node_16738 = cljs.core._nth.call(null,chunk__16730_16735,i__16732_16737);goog.dom.classes.set(node_16738,classes_16733__$1);
{
var G__16739 = seq__16729_16734;
var G__16740 = chunk__16730_16735;
var G__16741 = count__16731_16736;
var G__16742 = (i__16732_16737 + 1);
seq__16729_16734 = G__16739;
chunk__16730_16735 = G__16740;
count__16731_16736 = G__16741;
i__16732_16737 = G__16742;
continue;
}
} else
{var temp__4092__auto___16743 = cljs.core.seq.call(null,seq__16729_16734);if(temp__4092__auto___16743)
{var seq__16729_16744__$1 = temp__4092__auto___16743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16729_16744__$1))
{var c__4148__auto___16745 = cljs.core.chunk_first.call(null,seq__16729_16744__$1);{
var G__16746 = cljs.core.chunk_rest.call(null,seq__16729_16744__$1);
var G__16747 = c__4148__auto___16745;
var G__16748 = cljs.core.count.call(null,c__4148__auto___16745);
var G__16749 = 0;
seq__16729_16734 = G__16746;
chunk__16730_16735 = G__16747;
count__16731_16736 = G__16748;
i__16732_16737 = G__16749;
continue;
}
} else
{var node_16750 = cljs.core.first.call(null,seq__16729_16744__$1);goog.dom.classes.set(node_16750,classes_16733__$1);
{
var G__16751 = cljs.core.next.call(null,seq__16729_16744__$1);
var G__16752 = null;
var G__16753 = 0;
var G__16754 = 0;
seq__16729_16734 = G__16751;
chunk__16730_16735 = G__16752;
count__16731_16736 = G__16753;
i__16732_16737 = G__16754;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16759_16763 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16760_16764 = null;var count__16761_16765 = 0;var i__16762_16766 = 0;while(true){
if((i__16762_16766 < count__16761_16765))
{var node_16767 = cljs.core._nth.call(null,chunk__16760_16764,i__16762_16766);goog.dom.setTextContent(node_16767,value);
{
var G__16768 = seq__16759_16763;
var G__16769 = chunk__16760_16764;
var G__16770 = count__16761_16765;
var G__16771 = (i__16762_16766 + 1);
seq__16759_16763 = G__16768;
chunk__16760_16764 = G__16769;
count__16761_16765 = G__16770;
i__16762_16766 = G__16771;
continue;
}
} else
{var temp__4092__auto___16772 = cljs.core.seq.call(null,seq__16759_16763);if(temp__4092__auto___16772)
{var seq__16759_16773__$1 = temp__4092__auto___16772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16759_16773__$1))
{var c__4148__auto___16774 = cljs.core.chunk_first.call(null,seq__16759_16773__$1);{
var G__16775 = cljs.core.chunk_rest.call(null,seq__16759_16773__$1);
var G__16776 = c__4148__auto___16774;
var G__16777 = cljs.core.count.call(null,c__4148__auto___16774);
var G__16778 = 0;
seq__16759_16763 = G__16775;
chunk__16760_16764 = G__16776;
count__16761_16765 = G__16777;
i__16762_16766 = G__16778;
continue;
}
} else
{var node_16779 = cljs.core.first.call(null,seq__16759_16773__$1);goog.dom.setTextContent(node_16779,value);
{
var G__16780 = cljs.core.next.call(null,seq__16759_16773__$1);
var G__16781 = null;
var G__16782 = 0;
var G__16783 = 0;
seq__16759_16763 = G__16780;
chunk__16760_16764 = G__16781;
count__16761_16765 = G__16782;
i__16762_16766 = G__16783;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16788_16792 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16789_16793 = null;var count__16790_16794 = 0;var i__16791_16795 = 0;while(true){
if((i__16791_16795 < count__16790_16794))
{var node_16796 = cljs.core._nth.call(null,chunk__16789_16793,i__16791_16795);goog.dom.forms.setValue(node_16796,value);
{
var G__16797 = seq__16788_16792;
var G__16798 = chunk__16789_16793;
var G__16799 = count__16790_16794;
var G__16800 = (i__16791_16795 + 1);
seq__16788_16792 = G__16797;
chunk__16789_16793 = G__16798;
count__16790_16794 = G__16799;
i__16791_16795 = G__16800;
continue;
}
} else
{var temp__4092__auto___16801 = cljs.core.seq.call(null,seq__16788_16792);if(temp__4092__auto___16801)
{var seq__16788_16802__$1 = temp__4092__auto___16801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16788_16802__$1))
{var c__4148__auto___16803 = cljs.core.chunk_first.call(null,seq__16788_16802__$1);{
var G__16804 = cljs.core.chunk_rest.call(null,seq__16788_16802__$1);
var G__16805 = c__4148__auto___16803;
var G__16806 = cljs.core.count.call(null,c__4148__auto___16803);
var G__16807 = 0;
seq__16788_16792 = G__16804;
chunk__16789_16793 = G__16805;
count__16790_16794 = G__16806;
i__16791_16795 = G__16807;
continue;
}
} else
{var node_16808 = cljs.core.first.call(null,seq__16788_16802__$1);goog.dom.forms.setValue(node_16808,value);
{
var G__16809 = cljs.core.next.call(null,seq__16788_16802__$1);
var G__16810 = null;
var G__16811 = 0;
var G__16812 = 0;
seq__16788_16792 = G__16809;
chunk__16789_16793 = G__16810;
count__16790_16794 = G__16811;
i__16791_16795 = G__16812;
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
{var value_16823 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16819_16824 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16820_16825 = null;var count__16821_16826 = 0;var i__16822_16827 = 0;while(true){
if((i__16822_16827 < count__16821_16826))
{var node_16828 = cljs.core._nth.call(null,chunk__16820_16825,i__16822_16827);node_16828.innerHTML = value_16823;
{
var G__16829 = seq__16819_16824;
var G__16830 = chunk__16820_16825;
var G__16831 = count__16821_16826;
var G__16832 = (i__16822_16827 + 1);
seq__16819_16824 = G__16829;
chunk__16820_16825 = G__16830;
count__16821_16826 = G__16831;
i__16822_16827 = G__16832;
continue;
}
} else
{var temp__4092__auto___16833 = cljs.core.seq.call(null,seq__16819_16824);if(temp__4092__auto___16833)
{var seq__16819_16834__$1 = temp__4092__auto___16833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16819_16834__$1))
{var c__4148__auto___16835 = cljs.core.chunk_first.call(null,seq__16819_16834__$1);{
var G__16836 = cljs.core.chunk_rest.call(null,seq__16819_16834__$1);
var G__16837 = c__4148__auto___16835;
var G__16838 = cljs.core.count.call(null,c__4148__auto___16835);
var G__16839 = 0;
seq__16819_16824 = G__16836;
chunk__16820_16825 = G__16837;
count__16821_16826 = G__16838;
i__16822_16827 = G__16839;
continue;
}
} else
{var node_16840 = cljs.core.first.call(null,seq__16819_16834__$1);node_16840.innerHTML = value_16823;
{
var G__16841 = cljs.core.next.call(null,seq__16819_16834__$1);
var G__16842 = null;
var G__16843 = 0;
var G__16844 = 0;
seq__16819_16824 = G__16841;
chunk__16820_16825 = G__16842;
count__16821_16826 = G__16843;
i__16822_16827 = G__16844;
continue;
}
}
} else
{}
}
break;
}
}catch (e16818){if((e16818 instanceof Error))
{var e_16845 = e16818;domina.replace_children_BANG_.call(null,content,value_16823);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16818;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16852_16856 = cljs.core.seq.call(null,children);var chunk__16853_16857 = null;var count__16854_16858 = 0;var i__16855_16859 = 0;while(true){
if((i__16855_16859 < count__16854_16858))
{var child_16860 = cljs.core._nth.call(null,chunk__16853_16857,i__16855_16859);frag.appendChild(child_16860);
{
var G__16861 = seq__16852_16856;
var G__16862 = chunk__16853_16857;
var G__16863 = count__16854_16858;
var G__16864 = (i__16855_16859 + 1);
seq__16852_16856 = G__16861;
chunk__16853_16857 = G__16862;
count__16854_16858 = G__16863;
i__16855_16859 = G__16864;
continue;
}
} else
{var temp__4092__auto___16865 = cljs.core.seq.call(null,seq__16852_16856);if(temp__4092__auto___16865)
{var seq__16852_16866__$1 = temp__4092__auto___16865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16852_16866__$1))
{var c__4148__auto___16867 = cljs.core.chunk_first.call(null,seq__16852_16866__$1);{
var G__16868 = cljs.core.chunk_rest.call(null,seq__16852_16866__$1);
var G__16869 = c__4148__auto___16867;
var G__16870 = cljs.core.count.call(null,c__4148__auto___16867);
var G__16871 = 0;
seq__16852_16856 = G__16868;
chunk__16853_16857 = G__16869;
count__16854_16858 = G__16870;
i__16855_16859 = G__16871;
continue;
}
} else
{var child_16872 = cljs.core.first.call(null,seq__16852_16866__$1);frag.appendChild(child_16872);
{
var G__16873 = cljs.core.next.call(null,seq__16852_16866__$1);
var G__16874 = null;
var G__16875 = 0;
var G__16876 = 0;
seq__16852_16856 = G__16873;
chunk__16853_16857 = G__16874;
count__16854_16858 = G__16875;
i__16855_16859 = G__16876;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16846_SHARP_,p2__16847_SHARP_){return f.call(null,p1__16846_SHARP_,p2__16847_SHARP_);
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
{if((function (){var G__16878 = list_thing;if(G__16878)
{var bit__4050__auto__ = (G__16878.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16878.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16878.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16878);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16878);
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
{if((function (){var G__16879 = content;if(G__16879)
{var bit__4050__auto__ = (G__16879.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16879.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16879.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16879);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16879);
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
{if((function (){var G__16880 = content;if(G__16880)
{var bit__4050__auto__ = (G__16880.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16880.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16880.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16880);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16880);
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