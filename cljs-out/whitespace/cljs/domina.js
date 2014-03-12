// Compiled by ClojureScript 0.0-2173
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
var opt_wrapper_50420 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_50421 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_50422 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_50421,table_section_wrapper_50421,opt_wrapper_50420,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_50422,table_section_wrapper_50421,cell_wrapper_50422,opt_wrapper_50420,table_section_wrapper_50421,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_50421]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__50427 = cljs.core.seq.call(null,tbody);var chunk__50428 = null;var count__50429 = 0;var i__50430 = 0;while(true){
if((i__50430 < count__50429))
{var child = cljs.core._nth.call(null,chunk__50428,i__50430);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50431 = seq__50427;
var G__50432 = chunk__50428;
var G__50433 = count__50429;
var G__50434 = (i__50430 + 1);
seq__50427 = G__50431;
chunk__50428 = G__50432;
count__50429 = G__50433;
i__50430 = G__50434;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50427);if(temp__4092__auto__)
{var seq__50427__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50427__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50427__$1);{
var G__50435 = cljs.core.chunk_rest.call(null,seq__50427__$1);
var G__50436 = c__4189__auto__;
var G__50437 = cljs.core.count.call(null,c__4189__auto__);
var G__50438 = 0;
seq__50427 = G__50435;
chunk__50428 = G__50436;
count__50429 = G__50437;
i__50430 = G__50438;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__50427__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__50439 = cljs.core.next.call(null,seq__50427__$1);
var G__50440 = null;
var G__50441 = 0;
var G__50442 = 0;
seq__50427 = G__50439;
chunk__50428 = G__50440;
count__50429 = G__50441;
i__50430 = G__50442;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__50444 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__50444,0,null);var start_wrap = cljs.core.nth.call(null,vec__50444,1,null);var end_wrap = cljs.core.nth.call(null,vec__50444,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__50445 = wrapper.lastChild;
var G__50446 = (level - 1);
wrapper = G__50445;
level = G__50446;
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
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
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
domina.DomContent = (function (){var obj50448 = {};return obj50448;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__50449){
var mesg = cljs.core.seq(arglist__50449);
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
log.cljs$lang$applyTo = (function (arglist__50450){
var mesg = cljs.core.seq(arglist__50450);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__50451){
var contents = cljs.core.seq(arglist__50451);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__50452_SHARP_){return p1__50452_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__50453_SHARP_,p2__50454_SHARP_){return goog.dom.insertChildAt(p1__50453_SHARP_,p2__50454_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50456_SHARP_,p2__50455_SHARP_){return goog.dom.insertSiblingBefore(p2__50455_SHARP_,p1__50456_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__50458_SHARP_,p2__50457_SHARP_){return goog.dom.insertSiblingAfter(p2__50457_SHARP_,p1__50458_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__50460_SHARP_,p2__50459_SHARP_){return goog.dom.replaceNode(p2__50459_SHARP_,p1__50460_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__50465_50469 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50466_50470 = null;var count__50467_50471 = 0;var i__50468_50472 = 0;while(true){
if((i__50468_50472 < count__50467_50471))
{var n_50473 = cljs.core._nth.call(null,chunk__50466_50470,i__50468_50472);goog.style.setStyle(n_50473,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50474 = seq__50465_50469;
var G__50475 = chunk__50466_50470;
var G__50476 = count__50467_50471;
var G__50477 = (i__50468_50472 + 1);
seq__50465_50469 = G__50474;
chunk__50466_50470 = G__50475;
count__50467_50471 = G__50476;
i__50468_50472 = G__50477;
continue;
}
} else
{var temp__4092__auto___50478 = cljs.core.seq.call(null,seq__50465_50469);if(temp__4092__auto___50478)
{var seq__50465_50479__$1 = temp__4092__auto___50478;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50465_50479__$1))
{var c__4189__auto___50480 = cljs.core.chunk_first.call(null,seq__50465_50479__$1);{
var G__50481 = cljs.core.chunk_rest.call(null,seq__50465_50479__$1);
var G__50482 = c__4189__auto___50480;
var G__50483 = cljs.core.count.call(null,c__4189__auto___50480);
var G__50484 = 0;
seq__50465_50469 = G__50481;
chunk__50466_50470 = G__50482;
count__50467_50471 = G__50483;
i__50468_50472 = G__50484;
continue;
}
} else
{var n_50485 = cljs.core.first.call(null,seq__50465_50479__$1);goog.style.setStyle(n_50485,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50486 = cljs.core.next.call(null,seq__50465_50479__$1);
var G__50487 = null;
var G__50488 = 0;
var G__50489 = 0;
seq__50465_50469 = G__50486;
chunk__50466_50470 = G__50487;
count__50467_50471 = G__50488;
i__50468_50472 = G__50489;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__50490){
var content = cljs.core.first(arglist__50490);
arglist__50490 = cljs.core.next(arglist__50490);
var name = cljs.core.first(arglist__50490);
var value = cljs.core.rest(arglist__50490);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__50495_50499 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50496_50500 = null;var count__50497_50501 = 0;var i__50498_50502 = 0;while(true){
if((i__50498_50502 < count__50497_50501))
{var n_50503 = cljs.core._nth.call(null,chunk__50496_50500,i__50498_50502);n_50503.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50504 = seq__50495_50499;
var G__50505 = chunk__50496_50500;
var G__50506 = count__50497_50501;
var G__50507 = (i__50498_50502 + 1);
seq__50495_50499 = G__50504;
chunk__50496_50500 = G__50505;
count__50497_50501 = G__50506;
i__50498_50502 = G__50507;
continue;
}
} else
{var temp__4092__auto___50508 = cljs.core.seq.call(null,seq__50495_50499);if(temp__4092__auto___50508)
{var seq__50495_50509__$1 = temp__4092__auto___50508;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50495_50509__$1))
{var c__4189__auto___50510 = cljs.core.chunk_first.call(null,seq__50495_50509__$1);{
var G__50511 = cljs.core.chunk_rest.call(null,seq__50495_50509__$1);
var G__50512 = c__4189__auto___50510;
var G__50513 = cljs.core.count.call(null,c__4189__auto___50510);
var G__50514 = 0;
seq__50495_50499 = G__50511;
chunk__50496_50500 = G__50512;
count__50497_50501 = G__50513;
i__50498_50502 = G__50514;
continue;
}
} else
{var n_50515 = cljs.core.first.call(null,seq__50495_50509__$1);n_50515.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__50516 = cljs.core.next.call(null,seq__50495_50509__$1);
var G__50517 = null;
var G__50518 = 0;
var G__50519 = 0;
seq__50495_50499 = G__50516;
chunk__50496_50500 = G__50517;
count__50497_50501 = G__50518;
i__50498_50502 = G__50519;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__50520){
var content = cljs.core.first(arglist__50520);
arglist__50520 = cljs.core.next(arglist__50520);
var name = cljs.core.first(arglist__50520);
var value = cljs.core.rest(arglist__50520);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__50525_50529 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50526_50530 = null;var count__50527_50531 = 0;var i__50528_50532 = 0;while(true){
if((i__50528_50532 < count__50527_50531))
{var n_50533 = cljs.core._nth.call(null,chunk__50526_50530,i__50528_50532);n_50533.removeAttribute(cljs.core.name.call(null,name));
{
var G__50534 = seq__50525_50529;
var G__50535 = chunk__50526_50530;
var G__50536 = count__50527_50531;
var G__50537 = (i__50528_50532 + 1);
seq__50525_50529 = G__50534;
chunk__50526_50530 = G__50535;
count__50527_50531 = G__50536;
i__50528_50532 = G__50537;
continue;
}
} else
{var temp__4092__auto___50538 = cljs.core.seq.call(null,seq__50525_50529);if(temp__4092__auto___50538)
{var seq__50525_50539__$1 = temp__4092__auto___50538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50525_50539__$1))
{var c__4189__auto___50540 = cljs.core.chunk_first.call(null,seq__50525_50539__$1);{
var G__50541 = cljs.core.chunk_rest.call(null,seq__50525_50539__$1);
var G__50542 = c__4189__auto___50540;
var G__50543 = cljs.core.count.call(null,c__4189__auto___50540);
var G__50544 = 0;
seq__50525_50529 = G__50541;
chunk__50526_50530 = G__50542;
count__50527_50531 = G__50543;
i__50528_50532 = G__50544;
continue;
}
} else
{var n_50545 = cljs.core.first.call(null,seq__50525_50539__$1);n_50545.removeAttribute(cljs.core.name.call(null,name));
{
var G__50546 = cljs.core.next.call(null,seq__50525_50539__$1);
var G__50547 = null;
var G__50548 = 0;
var G__50549 = 0;
seq__50525_50529 = G__50546;
chunk__50526_50530 = G__50547;
count__50527_50531 = G__50548;
i__50528_50532 = G__50549;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__50551 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__50551,0,null);var v = cljs.core.nth.call(null,vec__50551,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__50552_SHARP_){var attr = attrs__$1.item(p1__50552_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__50559_50565 = cljs.core.seq.call(null,styles);var chunk__50560_50566 = null;var count__50561_50567 = 0;var i__50562_50568 = 0;while(true){
if((i__50562_50568 < count__50561_50567))
{var vec__50563_50569 = cljs.core._nth.call(null,chunk__50560_50566,i__50562_50568);var name_50570 = cljs.core.nth.call(null,vec__50563_50569,0,null);var value_50571 = cljs.core.nth.call(null,vec__50563_50569,1,null);domina.set_style_BANG_.call(null,content,name_50570,value_50571);
{
var G__50572 = seq__50559_50565;
var G__50573 = chunk__50560_50566;
var G__50574 = count__50561_50567;
var G__50575 = (i__50562_50568 + 1);
seq__50559_50565 = G__50572;
chunk__50560_50566 = G__50573;
count__50561_50567 = G__50574;
i__50562_50568 = G__50575;
continue;
}
} else
{var temp__4092__auto___50576 = cljs.core.seq.call(null,seq__50559_50565);if(temp__4092__auto___50576)
{var seq__50559_50577__$1 = temp__4092__auto___50576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50559_50577__$1))
{var c__4189__auto___50578 = cljs.core.chunk_first.call(null,seq__50559_50577__$1);{
var G__50579 = cljs.core.chunk_rest.call(null,seq__50559_50577__$1);
var G__50580 = c__4189__auto___50578;
var G__50581 = cljs.core.count.call(null,c__4189__auto___50578);
var G__50582 = 0;
seq__50559_50565 = G__50579;
chunk__50560_50566 = G__50580;
count__50561_50567 = G__50581;
i__50562_50568 = G__50582;
continue;
}
} else
{var vec__50564_50583 = cljs.core.first.call(null,seq__50559_50577__$1);var name_50584 = cljs.core.nth.call(null,vec__50564_50583,0,null);var value_50585 = cljs.core.nth.call(null,vec__50564_50583,1,null);domina.set_style_BANG_.call(null,content,name_50584,value_50585);
{
var G__50586 = cljs.core.next.call(null,seq__50559_50577__$1);
var G__50587 = null;
var G__50588 = 0;
var G__50589 = 0;
seq__50559_50565 = G__50586;
chunk__50560_50566 = G__50587;
count__50561_50567 = G__50588;
i__50562_50568 = G__50589;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__50596_50602 = cljs.core.seq.call(null,attrs);var chunk__50597_50603 = null;var count__50598_50604 = 0;var i__50599_50605 = 0;while(true){
if((i__50599_50605 < count__50598_50604))
{var vec__50600_50606 = cljs.core._nth.call(null,chunk__50597_50603,i__50599_50605);var name_50607 = cljs.core.nth.call(null,vec__50600_50606,0,null);var value_50608 = cljs.core.nth.call(null,vec__50600_50606,1,null);domina.set_attr_BANG_.call(null,content,name_50607,value_50608);
{
var G__50609 = seq__50596_50602;
var G__50610 = chunk__50597_50603;
var G__50611 = count__50598_50604;
var G__50612 = (i__50599_50605 + 1);
seq__50596_50602 = G__50609;
chunk__50597_50603 = G__50610;
count__50598_50604 = G__50611;
i__50599_50605 = G__50612;
continue;
}
} else
{var temp__4092__auto___50613 = cljs.core.seq.call(null,seq__50596_50602);if(temp__4092__auto___50613)
{var seq__50596_50614__$1 = temp__4092__auto___50613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50596_50614__$1))
{var c__4189__auto___50615 = cljs.core.chunk_first.call(null,seq__50596_50614__$1);{
var G__50616 = cljs.core.chunk_rest.call(null,seq__50596_50614__$1);
var G__50617 = c__4189__auto___50615;
var G__50618 = cljs.core.count.call(null,c__4189__auto___50615);
var G__50619 = 0;
seq__50596_50602 = G__50616;
chunk__50597_50603 = G__50617;
count__50598_50604 = G__50618;
i__50599_50605 = G__50619;
continue;
}
} else
{var vec__50601_50620 = cljs.core.first.call(null,seq__50596_50614__$1);var name_50621 = cljs.core.nth.call(null,vec__50601_50620,0,null);var value_50622 = cljs.core.nth.call(null,vec__50601_50620,1,null);domina.set_attr_BANG_.call(null,content,name_50621,value_50622);
{
var G__50623 = cljs.core.next.call(null,seq__50596_50614__$1);
var G__50624 = null;
var G__50625 = 0;
var G__50626 = 0;
seq__50596_50602 = G__50623;
chunk__50597_50603 = G__50624;
count__50598_50604 = G__50625;
i__50599_50605 = G__50626;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__50631_50635 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50632_50636 = null;var count__50633_50637 = 0;var i__50634_50638 = 0;while(true){
if((i__50634_50638 < count__50633_50637))
{var node_50639 = cljs.core._nth.call(null,chunk__50632_50636,i__50634_50638);goog.dom.classes.add(node_50639,class$);
{
var G__50640 = seq__50631_50635;
var G__50641 = chunk__50632_50636;
var G__50642 = count__50633_50637;
var G__50643 = (i__50634_50638 + 1);
seq__50631_50635 = G__50640;
chunk__50632_50636 = G__50641;
count__50633_50637 = G__50642;
i__50634_50638 = G__50643;
continue;
}
} else
{var temp__4092__auto___50644 = cljs.core.seq.call(null,seq__50631_50635);if(temp__4092__auto___50644)
{var seq__50631_50645__$1 = temp__4092__auto___50644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50631_50645__$1))
{var c__4189__auto___50646 = cljs.core.chunk_first.call(null,seq__50631_50645__$1);{
var G__50647 = cljs.core.chunk_rest.call(null,seq__50631_50645__$1);
var G__50648 = c__4189__auto___50646;
var G__50649 = cljs.core.count.call(null,c__4189__auto___50646);
var G__50650 = 0;
seq__50631_50635 = G__50647;
chunk__50632_50636 = G__50648;
count__50633_50637 = G__50649;
i__50634_50638 = G__50650;
continue;
}
} else
{var node_50651 = cljs.core.first.call(null,seq__50631_50645__$1);goog.dom.classes.add(node_50651,class$);
{
var G__50652 = cljs.core.next.call(null,seq__50631_50645__$1);
var G__50653 = null;
var G__50654 = 0;
var G__50655 = 0;
seq__50631_50635 = G__50652;
chunk__50632_50636 = G__50653;
count__50633_50637 = G__50654;
i__50634_50638 = G__50655;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__50660_50664 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50661_50665 = null;var count__50662_50666 = 0;var i__50663_50667 = 0;while(true){
if((i__50663_50667 < count__50662_50666))
{var node_50668 = cljs.core._nth.call(null,chunk__50661_50665,i__50663_50667);goog.dom.classes.remove(node_50668,class$);
{
var G__50669 = seq__50660_50664;
var G__50670 = chunk__50661_50665;
var G__50671 = count__50662_50666;
var G__50672 = (i__50663_50667 + 1);
seq__50660_50664 = G__50669;
chunk__50661_50665 = G__50670;
count__50662_50666 = G__50671;
i__50663_50667 = G__50672;
continue;
}
} else
{var temp__4092__auto___50673 = cljs.core.seq.call(null,seq__50660_50664);if(temp__4092__auto___50673)
{var seq__50660_50674__$1 = temp__4092__auto___50673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50660_50674__$1))
{var c__4189__auto___50675 = cljs.core.chunk_first.call(null,seq__50660_50674__$1);{
var G__50676 = cljs.core.chunk_rest.call(null,seq__50660_50674__$1);
var G__50677 = c__4189__auto___50675;
var G__50678 = cljs.core.count.call(null,c__4189__auto___50675);
var G__50679 = 0;
seq__50660_50664 = G__50676;
chunk__50661_50665 = G__50677;
count__50662_50666 = G__50678;
i__50663_50667 = G__50679;
continue;
}
} else
{var node_50680 = cljs.core.first.call(null,seq__50660_50674__$1);goog.dom.classes.remove(node_50680,class$);
{
var G__50681 = cljs.core.next.call(null,seq__50660_50674__$1);
var G__50682 = null;
var G__50683 = 0;
var G__50684 = 0;
seq__50660_50664 = G__50681;
chunk__50661_50665 = G__50682;
count__50662_50666 = G__50683;
i__50663_50667 = G__50684;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__50689_50693 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50690_50694 = null;var count__50691_50695 = 0;var i__50692_50696 = 0;while(true){
if((i__50692_50696 < count__50691_50695))
{var node_50697 = cljs.core._nth.call(null,chunk__50690_50694,i__50692_50696);goog.dom.classes.toggle(node_50697,class$);
{
var G__50698 = seq__50689_50693;
var G__50699 = chunk__50690_50694;
var G__50700 = count__50691_50695;
var G__50701 = (i__50692_50696 + 1);
seq__50689_50693 = G__50698;
chunk__50690_50694 = G__50699;
count__50691_50695 = G__50700;
i__50692_50696 = G__50701;
continue;
}
} else
{var temp__4092__auto___50702 = cljs.core.seq.call(null,seq__50689_50693);if(temp__4092__auto___50702)
{var seq__50689_50703__$1 = temp__4092__auto___50702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50689_50703__$1))
{var c__4189__auto___50704 = cljs.core.chunk_first.call(null,seq__50689_50703__$1);{
var G__50705 = cljs.core.chunk_rest.call(null,seq__50689_50703__$1);
var G__50706 = c__4189__auto___50704;
var G__50707 = cljs.core.count.call(null,c__4189__auto___50704);
var G__50708 = 0;
seq__50689_50693 = G__50705;
chunk__50690_50694 = G__50706;
count__50691_50695 = G__50707;
i__50692_50696 = G__50708;
continue;
}
} else
{var node_50709 = cljs.core.first.call(null,seq__50689_50703__$1);goog.dom.classes.toggle(node_50709,class$);
{
var G__50710 = cljs.core.next.call(null,seq__50689_50703__$1);
var G__50711 = null;
var G__50712 = 0;
var G__50713 = 0;
seq__50689_50693 = G__50710;
chunk__50690_50694 = G__50711;
count__50691_50695 = G__50712;
i__50692_50696 = G__50713;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_50722__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__50718_50723 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50719_50724 = null;var count__50720_50725 = 0;var i__50721_50726 = 0;while(true){
if((i__50721_50726 < count__50720_50725))
{var node_50727 = cljs.core._nth.call(null,chunk__50719_50724,i__50721_50726);goog.dom.classes.set(node_50727,classes_50722__$1);
{
var G__50728 = seq__50718_50723;
var G__50729 = chunk__50719_50724;
var G__50730 = count__50720_50725;
var G__50731 = (i__50721_50726 + 1);
seq__50718_50723 = G__50728;
chunk__50719_50724 = G__50729;
count__50720_50725 = G__50730;
i__50721_50726 = G__50731;
continue;
}
} else
{var temp__4092__auto___50732 = cljs.core.seq.call(null,seq__50718_50723);if(temp__4092__auto___50732)
{var seq__50718_50733__$1 = temp__4092__auto___50732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50718_50733__$1))
{var c__4189__auto___50734 = cljs.core.chunk_first.call(null,seq__50718_50733__$1);{
var G__50735 = cljs.core.chunk_rest.call(null,seq__50718_50733__$1);
var G__50736 = c__4189__auto___50734;
var G__50737 = cljs.core.count.call(null,c__4189__auto___50734);
var G__50738 = 0;
seq__50718_50723 = G__50735;
chunk__50719_50724 = G__50736;
count__50720_50725 = G__50737;
i__50721_50726 = G__50738;
continue;
}
} else
{var node_50739 = cljs.core.first.call(null,seq__50718_50733__$1);goog.dom.classes.set(node_50739,classes_50722__$1);
{
var G__50740 = cljs.core.next.call(null,seq__50718_50733__$1);
var G__50741 = null;
var G__50742 = 0;
var G__50743 = 0;
seq__50718_50723 = G__50740;
chunk__50719_50724 = G__50741;
count__50720_50725 = G__50742;
i__50721_50726 = G__50743;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__50748_50752 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50749_50753 = null;var count__50750_50754 = 0;var i__50751_50755 = 0;while(true){
if((i__50751_50755 < count__50750_50754))
{var node_50756 = cljs.core._nth.call(null,chunk__50749_50753,i__50751_50755);goog.dom.setTextContent(node_50756,value);
{
var G__50757 = seq__50748_50752;
var G__50758 = chunk__50749_50753;
var G__50759 = count__50750_50754;
var G__50760 = (i__50751_50755 + 1);
seq__50748_50752 = G__50757;
chunk__50749_50753 = G__50758;
count__50750_50754 = G__50759;
i__50751_50755 = G__50760;
continue;
}
} else
{var temp__4092__auto___50761 = cljs.core.seq.call(null,seq__50748_50752);if(temp__4092__auto___50761)
{var seq__50748_50762__$1 = temp__4092__auto___50761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50748_50762__$1))
{var c__4189__auto___50763 = cljs.core.chunk_first.call(null,seq__50748_50762__$1);{
var G__50764 = cljs.core.chunk_rest.call(null,seq__50748_50762__$1);
var G__50765 = c__4189__auto___50763;
var G__50766 = cljs.core.count.call(null,c__4189__auto___50763);
var G__50767 = 0;
seq__50748_50752 = G__50764;
chunk__50749_50753 = G__50765;
count__50750_50754 = G__50766;
i__50751_50755 = G__50767;
continue;
}
} else
{var node_50768 = cljs.core.first.call(null,seq__50748_50762__$1);goog.dom.setTextContent(node_50768,value);
{
var G__50769 = cljs.core.next.call(null,seq__50748_50762__$1);
var G__50770 = null;
var G__50771 = 0;
var G__50772 = 0;
seq__50748_50752 = G__50769;
chunk__50749_50753 = G__50770;
count__50750_50754 = G__50771;
i__50751_50755 = G__50772;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__50777_50781 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50778_50782 = null;var count__50779_50783 = 0;var i__50780_50784 = 0;while(true){
if((i__50780_50784 < count__50779_50783))
{var node_50785 = cljs.core._nth.call(null,chunk__50778_50782,i__50780_50784);goog.dom.forms.setValue(node_50785,value);
{
var G__50786 = seq__50777_50781;
var G__50787 = chunk__50778_50782;
var G__50788 = count__50779_50783;
var G__50789 = (i__50780_50784 + 1);
seq__50777_50781 = G__50786;
chunk__50778_50782 = G__50787;
count__50779_50783 = G__50788;
i__50780_50784 = G__50789;
continue;
}
} else
{var temp__4092__auto___50790 = cljs.core.seq.call(null,seq__50777_50781);if(temp__4092__auto___50790)
{var seq__50777_50791__$1 = temp__4092__auto___50790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50777_50791__$1))
{var c__4189__auto___50792 = cljs.core.chunk_first.call(null,seq__50777_50791__$1);{
var G__50793 = cljs.core.chunk_rest.call(null,seq__50777_50791__$1);
var G__50794 = c__4189__auto___50792;
var G__50795 = cljs.core.count.call(null,c__4189__auto___50792);
var G__50796 = 0;
seq__50777_50781 = G__50793;
chunk__50778_50782 = G__50794;
count__50779_50783 = G__50795;
i__50780_50784 = G__50796;
continue;
}
} else
{var node_50797 = cljs.core.first.call(null,seq__50777_50791__$1);goog.dom.forms.setValue(node_50797,value);
{
var G__50798 = cljs.core.next.call(null,seq__50777_50791__$1);
var G__50799 = null;
var G__50800 = 0;
var G__50801 = 0;
seq__50777_50781 = G__50798;
chunk__50778_50782 = G__50799;
count__50779_50783 = G__50800;
i__50780_50784 = G__50801;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_50812 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__50808_50813 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50809_50814 = null;var count__50810_50815 = 0;var i__50811_50816 = 0;while(true){
if((i__50811_50816 < count__50810_50815))
{var node_50817 = cljs.core._nth.call(null,chunk__50809_50814,i__50811_50816);node_50817.innerHTML = value_50812;
{
var G__50818 = seq__50808_50813;
var G__50819 = chunk__50809_50814;
var G__50820 = count__50810_50815;
var G__50821 = (i__50811_50816 + 1);
seq__50808_50813 = G__50818;
chunk__50809_50814 = G__50819;
count__50810_50815 = G__50820;
i__50811_50816 = G__50821;
continue;
}
} else
{var temp__4092__auto___50822 = cljs.core.seq.call(null,seq__50808_50813);if(temp__4092__auto___50822)
{var seq__50808_50823__$1 = temp__4092__auto___50822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50808_50823__$1))
{var c__4189__auto___50824 = cljs.core.chunk_first.call(null,seq__50808_50823__$1);{
var G__50825 = cljs.core.chunk_rest.call(null,seq__50808_50823__$1);
var G__50826 = c__4189__auto___50824;
var G__50827 = cljs.core.count.call(null,c__4189__auto___50824);
var G__50828 = 0;
seq__50808_50813 = G__50825;
chunk__50809_50814 = G__50826;
count__50810_50815 = G__50827;
i__50811_50816 = G__50828;
continue;
}
} else
{var node_50829 = cljs.core.first.call(null,seq__50808_50823__$1);node_50829.innerHTML = value_50812;
{
var G__50830 = cljs.core.next.call(null,seq__50808_50823__$1);
var G__50831 = null;
var G__50832 = 0;
var G__50833 = 0;
seq__50808_50813 = G__50830;
chunk__50809_50814 = G__50831;
count__50810_50815 = G__50832;
i__50811_50816 = G__50833;
continue;
}
}
} else
{}
}
break;
}
}catch (e50807){if((e50807 instanceof Error))
{var e_50834 = e50807;domina.replace_children_BANG_.call(null,content,value_50812);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50807;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__50841_50845 = cljs.core.seq.call(null,children);var chunk__50842_50846 = null;var count__50843_50847 = 0;var i__50844_50848 = 0;while(true){
if((i__50844_50848 < count__50843_50847))
{var child_50849 = cljs.core._nth.call(null,chunk__50842_50846,i__50844_50848);frag.appendChild(child_50849);
{
var G__50850 = seq__50841_50845;
var G__50851 = chunk__50842_50846;
var G__50852 = count__50843_50847;
var G__50853 = (i__50844_50848 + 1);
seq__50841_50845 = G__50850;
chunk__50842_50846 = G__50851;
count__50843_50847 = G__50852;
i__50844_50848 = G__50853;
continue;
}
} else
{var temp__4092__auto___50854 = cljs.core.seq.call(null,seq__50841_50845);if(temp__4092__auto___50854)
{var seq__50841_50855__$1 = temp__4092__auto___50854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50841_50855__$1))
{var c__4189__auto___50856 = cljs.core.chunk_first.call(null,seq__50841_50855__$1);{
var G__50857 = cljs.core.chunk_rest.call(null,seq__50841_50855__$1);
var G__50858 = c__4189__auto___50856;
var G__50859 = cljs.core.count.call(null,c__4189__auto___50856);
var G__50860 = 0;
seq__50841_50845 = G__50857;
chunk__50842_50846 = G__50858;
count__50843_50847 = G__50859;
i__50844_50848 = G__50860;
continue;
}
} else
{var child_50861 = cljs.core.first.call(null,seq__50841_50855__$1);frag.appendChild(child_50861);
{
var G__50862 = cljs.core.next.call(null,seq__50841_50855__$1);
var G__50863 = null;
var G__50864 = 0;
var G__50865 = 0;
seq__50841_50845 = G__50862;
chunk__50842_50846 = G__50863;
count__50843_50847 = G__50864;
i__50844_50848 = G__50865;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__50835_SHARP_,p2__50836_SHARP_){return f.call(null,p1__50835_SHARP_,p2__50836_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
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
{if((function (){var G__50867 = list_thing;if(G__50867)
{var bit__4091__auto__ = (G__50867.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50867.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50867.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50867);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50867);
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
{if((function (){var G__50868 = content;if(G__50868)
{var bit__4091__auto__ = (G__50868.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50868.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50868.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50868);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50868);
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
{if((function (){var G__50869 = content;if(G__50869)
{var bit__4091__auto__ = (G__50869.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__50869.cljs$core$ISeqable$))
{return true;
} else
{if((!G__50869.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50869);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__50869);
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
