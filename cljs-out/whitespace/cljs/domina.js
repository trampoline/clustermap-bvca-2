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
var opt_wrapper_33418 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_33419 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_33420 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_33419,table_section_wrapper_33419,opt_wrapper_33418,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_33420,table_section_wrapper_33419,cell_wrapper_33420,opt_wrapper_33418,table_section_wrapper_33419,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_33419]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__33425 = cljs.core.seq.call(null,tbody);var chunk__33426 = null;var count__33427 = 0;var i__33428 = 0;while(true){
if((i__33428 < count__33427))
{var child = cljs.core._nth.call(null,chunk__33426,i__33428);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33429 = seq__33425;
var G__33430 = chunk__33426;
var G__33431 = count__33427;
var G__33432 = (i__33428 + 1);
seq__33425 = G__33429;
chunk__33426 = G__33430;
count__33427 = G__33431;
i__33428 = G__33432;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33425);if(temp__4092__auto__)
{var seq__33425__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33425__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33425__$1);{
var G__33433 = cljs.core.chunk_rest.call(null,seq__33425__$1);
var G__33434 = c__4148__auto__;
var G__33435 = cljs.core.count.call(null,c__4148__auto__);
var G__33436 = 0;
seq__33425 = G__33433;
chunk__33426 = G__33434;
count__33427 = G__33435;
i__33428 = G__33436;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__33425__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33437 = cljs.core.next.call(null,seq__33425__$1);
var G__33438 = null;
var G__33439 = 0;
var G__33440 = 0;
seq__33425 = G__33437;
chunk__33426 = G__33438;
count__33427 = G__33439;
i__33428 = G__33440;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__33442 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__33442,0,null);var start_wrap = cljs.core.nth.call(null,vec__33442,1,null);var end_wrap = cljs.core.nth.call(null,vec__33442,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__33443 = wrapper.lastChild;
var G__33444 = (level - 1);
wrapper = G__33443;
level = G__33444;
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
domina.DomContent = (function (){var obj33446 = {};return obj33446;
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
log_debug.cljs$lang$applyTo = (function (arglist__33447){
var mesg = cljs.core.seq(arglist__33447);
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
log.cljs$lang$applyTo = (function (arglist__33448){
var mesg = cljs.core.seq(arglist__33448);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__33449){
var contents = cljs.core.seq(arglist__33449);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__33450_SHARP_){return p1__33450_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__33451_SHARP_,p2__33452_SHARP_){return goog.dom.insertChildAt(p1__33451_SHARP_,p2__33452_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33454_SHARP_,p2__33453_SHARP_){return goog.dom.insertSiblingBefore(p2__33453_SHARP_,p1__33454_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33456_SHARP_,p2__33455_SHARP_){return goog.dom.insertSiblingAfter(p2__33455_SHARP_,p1__33456_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__33458_SHARP_,p2__33457_SHARP_){return goog.dom.replaceNode(p2__33457_SHARP_,p1__33458_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__33463_33467 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33464_33468 = null;var count__33465_33469 = 0;var i__33466_33470 = 0;while(true){
if((i__33466_33470 < count__33465_33469))
{var n_33471 = cljs.core._nth.call(null,chunk__33464_33468,i__33466_33470);goog.style.setStyle(n_33471,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33472 = seq__33463_33467;
var G__33473 = chunk__33464_33468;
var G__33474 = count__33465_33469;
var G__33475 = (i__33466_33470 + 1);
seq__33463_33467 = G__33472;
chunk__33464_33468 = G__33473;
count__33465_33469 = G__33474;
i__33466_33470 = G__33475;
continue;
}
} else
{var temp__4092__auto___33476 = cljs.core.seq.call(null,seq__33463_33467);if(temp__4092__auto___33476)
{var seq__33463_33477__$1 = temp__4092__auto___33476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33463_33477__$1))
{var c__4148__auto___33478 = cljs.core.chunk_first.call(null,seq__33463_33477__$1);{
var G__33479 = cljs.core.chunk_rest.call(null,seq__33463_33477__$1);
var G__33480 = c__4148__auto___33478;
var G__33481 = cljs.core.count.call(null,c__4148__auto___33478);
var G__33482 = 0;
seq__33463_33467 = G__33479;
chunk__33464_33468 = G__33480;
count__33465_33469 = G__33481;
i__33466_33470 = G__33482;
continue;
}
} else
{var n_33483 = cljs.core.first.call(null,seq__33463_33477__$1);goog.style.setStyle(n_33483,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33484 = cljs.core.next.call(null,seq__33463_33477__$1);
var G__33485 = null;
var G__33486 = 0;
var G__33487 = 0;
seq__33463_33467 = G__33484;
chunk__33464_33468 = G__33485;
count__33465_33469 = G__33486;
i__33466_33470 = G__33487;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__33488){
var content = cljs.core.first(arglist__33488);
arglist__33488 = cljs.core.next(arglist__33488);
var name = cljs.core.first(arglist__33488);
var value = cljs.core.rest(arglist__33488);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__33493_33497 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33494_33498 = null;var count__33495_33499 = 0;var i__33496_33500 = 0;while(true){
if((i__33496_33500 < count__33495_33499))
{var n_33501 = cljs.core._nth.call(null,chunk__33494_33498,i__33496_33500);n_33501.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33502 = seq__33493_33497;
var G__33503 = chunk__33494_33498;
var G__33504 = count__33495_33499;
var G__33505 = (i__33496_33500 + 1);
seq__33493_33497 = G__33502;
chunk__33494_33498 = G__33503;
count__33495_33499 = G__33504;
i__33496_33500 = G__33505;
continue;
}
} else
{var temp__4092__auto___33506 = cljs.core.seq.call(null,seq__33493_33497);if(temp__4092__auto___33506)
{var seq__33493_33507__$1 = temp__4092__auto___33506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33493_33507__$1))
{var c__4148__auto___33508 = cljs.core.chunk_first.call(null,seq__33493_33507__$1);{
var G__33509 = cljs.core.chunk_rest.call(null,seq__33493_33507__$1);
var G__33510 = c__4148__auto___33508;
var G__33511 = cljs.core.count.call(null,c__4148__auto___33508);
var G__33512 = 0;
seq__33493_33497 = G__33509;
chunk__33494_33498 = G__33510;
count__33495_33499 = G__33511;
i__33496_33500 = G__33512;
continue;
}
} else
{var n_33513 = cljs.core.first.call(null,seq__33493_33507__$1);n_33513.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33514 = cljs.core.next.call(null,seq__33493_33507__$1);
var G__33515 = null;
var G__33516 = 0;
var G__33517 = 0;
seq__33493_33497 = G__33514;
chunk__33494_33498 = G__33515;
count__33495_33499 = G__33516;
i__33496_33500 = G__33517;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__33518){
var content = cljs.core.first(arglist__33518);
arglist__33518 = cljs.core.next(arglist__33518);
var name = cljs.core.first(arglist__33518);
var value = cljs.core.rest(arglist__33518);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__33523_33527 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33524_33528 = null;var count__33525_33529 = 0;var i__33526_33530 = 0;while(true){
if((i__33526_33530 < count__33525_33529))
{var n_33531 = cljs.core._nth.call(null,chunk__33524_33528,i__33526_33530);n_33531.removeAttribute(cljs.core.name.call(null,name));
{
var G__33532 = seq__33523_33527;
var G__33533 = chunk__33524_33528;
var G__33534 = count__33525_33529;
var G__33535 = (i__33526_33530 + 1);
seq__33523_33527 = G__33532;
chunk__33524_33528 = G__33533;
count__33525_33529 = G__33534;
i__33526_33530 = G__33535;
continue;
}
} else
{var temp__4092__auto___33536 = cljs.core.seq.call(null,seq__33523_33527);if(temp__4092__auto___33536)
{var seq__33523_33537__$1 = temp__4092__auto___33536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33523_33537__$1))
{var c__4148__auto___33538 = cljs.core.chunk_first.call(null,seq__33523_33537__$1);{
var G__33539 = cljs.core.chunk_rest.call(null,seq__33523_33537__$1);
var G__33540 = c__4148__auto___33538;
var G__33541 = cljs.core.count.call(null,c__4148__auto___33538);
var G__33542 = 0;
seq__33523_33527 = G__33539;
chunk__33524_33528 = G__33540;
count__33525_33529 = G__33541;
i__33526_33530 = G__33542;
continue;
}
} else
{var n_33543 = cljs.core.first.call(null,seq__33523_33537__$1);n_33543.removeAttribute(cljs.core.name.call(null,name));
{
var G__33544 = cljs.core.next.call(null,seq__33523_33537__$1);
var G__33545 = null;
var G__33546 = 0;
var G__33547 = 0;
seq__33523_33527 = G__33544;
chunk__33524_33528 = G__33545;
count__33525_33529 = G__33546;
i__33526_33530 = G__33547;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__33549 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__33549,0,null);var v = cljs.core.nth.call(null,vec__33549,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__33550_SHARP_){var attr = attrs__$1.item(p1__33550_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__33557_33563 = cljs.core.seq.call(null,styles);var chunk__33558_33564 = null;var count__33559_33565 = 0;var i__33560_33566 = 0;while(true){
if((i__33560_33566 < count__33559_33565))
{var vec__33561_33567 = cljs.core._nth.call(null,chunk__33558_33564,i__33560_33566);var name_33568 = cljs.core.nth.call(null,vec__33561_33567,0,null);var value_33569 = cljs.core.nth.call(null,vec__33561_33567,1,null);domina.set_style_BANG_.call(null,content,name_33568,value_33569);
{
var G__33570 = seq__33557_33563;
var G__33571 = chunk__33558_33564;
var G__33572 = count__33559_33565;
var G__33573 = (i__33560_33566 + 1);
seq__33557_33563 = G__33570;
chunk__33558_33564 = G__33571;
count__33559_33565 = G__33572;
i__33560_33566 = G__33573;
continue;
}
} else
{var temp__4092__auto___33574 = cljs.core.seq.call(null,seq__33557_33563);if(temp__4092__auto___33574)
{var seq__33557_33575__$1 = temp__4092__auto___33574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33557_33575__$1))
{var c__4148__auto___33576 = cljs.core.chunk_first.call(null,seq__33557_33575__$1);{
var G__33577 = cljs.core.chunk_rest.call(null,seq__33557_33575__$1);
var G__33578 = c__4148__auto___33576;
var G__33579 = cljs.core.count.call(null,c__4148__auto___33576);
var G__33580 = 0;
seq__33557_33563 = G__33577;
chunk__33558_33564 = G__33578;
count__33559_33565 = G__33579;
i__33560_33566 = G__33580;
continue;
}
} else
{var vec__33562_33581 = cljs.core.first.call(null,seq__33557_33575__$1);var name_33582 = cljs.core.nth.call(null,vec__33562_33581,0,null);var value_33583 = cljs.core.nth.call(null,vec__33562_33581,1,null);domina.set_style_BANG_.call(null,content,name_33582,value_33583);
{
var G__33584 = cljs.core.next.call(null,seq__33557_33575__$1);
var G__33585 = null;
var G__33586 = 0;
var G__33587 = 0;
seq__33557_33563 = G__33584;
chunk__33558_33564 = G__33585;
count__33559_33565 = G__33586;
i__33560_33566 = G__33587;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__33594_33600 = cljs.core.seq.call(null,attrs);var chunk__33595_33601 = null;var count__33596_33602 = 0;var i__33597_33603 = 0;while(true){
if((i__33597_33603 < count__33596_33602))
{var vec__33598_33604 = cljs.core._nth.call(null,chunk__33595_33601,i__33597_33603);var name_33605 = cljs.core.nth.call(null,vec__33598_33604,0,null);var value_33606 = cljs.core.nth.call(null,vec__33598_33604,1,null);domina.set_attr_BANG_.call(null,content,name_33605,value_33606);
{
var G__33607 = seq__33594_33600;
var G__33608 = chunk__33595_33601;
var G__33609 = count__33596_33602;
var G__33610 = (i__33597_33603 + 1);
seq__33594_33600 = G__33607;
chunk__33595_33601 = G__33608;
count__33596_33602 = G__33609;
i__33597_33603 = G__33610;
continue;
}
} else
{var temp__4092__auto___33611 = cljs.core.seq.call(null,seq__33594_33600);if(temp__4092__auto___33611)
{var seq__33594_33612__$1 = temp__4092__auto___33611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33594_33612__$1))
{var c__4148__auto___33613 = cljs.core.chunk_first.call(null,seq__33594_33612__$1);{
var G__33614 = cljs.core.chunk_rest.call(null,seq__33594_33612__$1);
var G__33615 = c__4148__auto___33613;
var G__33616 = cljs.core.count.call(null,c__4148__auto___33613);
var G__33617 = 0;
seq__33594_33600 = G__33614;
chunk__33595_33601 = G__33615;
count__33596_33602 = G__33616;
i__33597_33603 = G__33617;
continue;
}
} else
{var vec__33599_33618 = cljs.core.first.call(null,seq__33594_33612__$1);var name_33619 = cljs.core.nth.call(null,vec__33599_33618,0,null);var value_33620 = cljs.core.nth.call(null,vec__33599_33618,1,null);domina.set_attr_BANG_.call(null,content,name_33619,value_33620);
{
var G__33621 = cljs.core.next.call(null,seq__33594_33612__$1);
var G__33622 = null;
var G__33623 = 0;
var G__33624 = 0;
seq__33594_33600 = G__33621;
chunk__33595_33601 = G__33622;
count__33596_33602 = G__33623;
i__33597_33603 = G__33624;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__33629_33633 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33630_33634 = null;var count__33631_33635 = 0;var i__33632_33636 = 0;while(true){
if((i__33632_33636 < count__33631_33635))
{var node_33637 = cljs.core._nth.call(null,chunk__33630_33634,i__33632_33636);goog.dom.classes.add(node_33637,class$);
{
var G__33638 = seq__33629_33633;
var G__33639 = chunk__33630_33634;
var G__33640 = count__33631_33635;
var G__33641 = (i__33632_33636 + 1);
seq__33629_33633 = G__33638;
chunk__33630_33634 = G__33639;
count__33631_33635 = G__33640;
i__33632_33636 = G__33641;
continue;
}
} else
{var temp__4092__auto___33642 = cljs.core.seq.call(null,seq__33629_33633);if(temp__4092__auto___33642)
{var seq__33629_33643__$1 = temp__4092__auto___33642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33629_33643__$1))
{var c__4148__auto___33644 = cljs.core.chunk_first.call(null,seq__33629_33643__$1);{
var G__33645 = cljs.core.chunk_rest.call(null,seq__33629_33643__$1);
var G__33646 = c__4148__auto___33644;
var G__33647 = cljs.core.count.call(null,c__4148__auto___33644);
var G__33648 = 0;
seq__33629_33633 = G__33645;
chunk__33630_33634 = G__33646;
count__33631_33635 = G__33647;
i__33632_33636 = G__33648;
continue;
}
} else
{var node_33649 = cljs.core.first.call(null,seq__33629_33643__$1);goog.dom.classes.add(node_33649,class$);
{
var G__33650 = cljs.core.next.call(null,seq__33629_33643__$1);
var G__33651 = null;
var G__33652 = 0;
var G__33653 = 0;
seq__33629_33633 = G__33650;
chunk__33630_33634 = G__33651;
count__33631_33635 = G__33652;
i__33632_33636 = G__33653;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__33658_33662 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33659_33663 = null;var count__33660_33664 = 0;var i__33661_33665 = 0;while(true){
if((i__33661_33665 < count__33660_33664))
{var node_33666 = cljs.core._nth.call(null,chunk__33659_33663,i__33661_33665);goog.dom.classes.remove(node_33666,class$);
{
var G__33667 = seq__33658_33662;
var G__33668 = chunk__33659_33663;
var G__33669 = count__33660_33664;
var G__33670 = (i__33661_33665 + 1);
seq__33658_33662 = G__33667;
chunk__33659_33663 = G__33668;
count__33660_33664 = G__33669;
i__33661_33665 = G__33670;
continue;
}
} else
{var temp__4092__auto___33671 = cljs.core.seq.call(null,seq__33658_33662);if(temp__4092__auto___33671)
{var seq__33658_33672__$1 = temp__4092__auto___33671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33658_33672__$1))
{var c__4148__auto___33673 = cljs.core.chunk_first.call(null,seq__33658_33672__$1);{
var G__33674 = cljs.core.chunk_rest.call(null,seq__33658_33672__$1);
var G__33675 = c__4148__auto___33673;
var G__33676 = cljs.core.count.call(null,c__4148__auto___33673);
var G__33677 = 0;
seq__33658_33662 = G__33674;
chunk__33659_33663 = G__33675;
count__33660_33664 = G__33676;
i__33661_33665 = G__33677;
continue;
}
} else
{var node_33678 = cljs.core.first.call(null,seq__33658_33672__$1);goog.dom.classes.remove(node_33678,class$);
{
var G__33679 = cljs.core.next.call(null,seq__33658_33672__$1);
var G__33680 = null;
var G__33681 = 0;
var G__33682 = 0;
seq__33658_33662 = G__33679;
chunk__33659_33663 = G__33680;
count__33660_33664 = G__33681;
i__33661_33665 = G__33682;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__33687_33691 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33688_33692 = null;var count__33689_33693 = 0;var i__33690_33694 = 0;while(true){
if((i__33690_33694 < count__33689_33693))
{var node_33695 = cljs.core._nth.call(null,chunk__33688_33692,i__33690_33694);goog.dom.classes.toggle(node_33695,class$);
{
var G__33696 = seq__33687_33691;
var G__33697 = chunk__33688_33692;
var G__33698 = count__33689_33693;
var G__33699 = (i__33690_33694 + 1);
seq__33687_33691 = G__33696;
chunk__33688_33692 = G__33697;
count__33689_33693 = G__33698;
i__33690_33694 = G__33699;
continue;
}
} else
{var temp__4092__auto___33700 = cljs.core.seq.call(null,seq__33687_33691);if(temp__4092__auto___33700)
{var seq__33687_33701__$1 = temp__4092__auto___33700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33687_33701__$1))
{var c__4148__auto___33702 = cljs.core.chunk_first.call(null,seq__33687_33701__$1);{
var G__33703 = cljs.core.chunk_rest.call(null,seq__33687_33701__$1);
var G__33704 = c__4148__auto___33702;
var G__33705 = cljs.core.count.call(null,c__4148__auto___33702);
var G__33706 = 0;
seq__33687_33691 = G__33703;
chunk__33688_33692 = G__33704;
count__33689_33693 = G__33705;
i__33690_33694 = G__33706;
continue;
}
} else
{var node_33707 = cljs.core.first.call(null,seq__33687_33701__$1);goog.dom.classes.toggle(node_33707,class$);
{
var G__33708 = cljs.core.next.call(null,seq__33687_33701__$1);
var G__33709 = null;
var G__33710 = 0;
var G__33711 = 0;
seq__33687_33691 = G__33708;
chunk__33688_33692 = G__33709;
count__33689_33693 = G__33710;
i__33690_33694 = G__33711;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_33720__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__33716_33721 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33717_33722 = null;var count__33718_33723 = 0;var i__33719_33724 = 0;while(true){
if((i__33719_33724 < count__33718_33723))
{var node_33725 = cljs.core._nth.call(null,chunk__33717_33722,i__33719_33724);goog.dom.classes.set(node_33725,classes_33720__$1);
{
var G__33726 = seq__33716_33721;
var G__33727 = chunk__33717_33722;
var G__33728 = count__33718_33723;
var G__33729 = (i__33719_33724 + 1);
seq__33716_33721 = G__33726;
chunk__33717_33722 = G__33727;
count__33718_33723 = G__33728;
i__33719_33724 = G__33729;
continue;
}
} else
{var temp__4092__auto___33730 = cljs.core.seq.call(null,seq__33716_33721);if(temp__4092__auto___33730)
{var seq__33716_33731__$1 = temp__4092__auto___33730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33716_33731__$1))
{var c__4148__auto___33732 = cljs.core.chunk_first.call(null,seq__33716_33731__$1);{
var G__33733 = cljs.core.chunk_rest.call(null,seq__33716_33731__$1);
var G__33734 = c__4148__auto___33732;
var G__33735 = cljs.core.count.call(null,c__4148__auto___33732);
var G__33736 = 0;
seq__33716_33721 = G__33733;
chunk__33717_33722 = G__33734;
count__33718_33723 = G__33735;
i__33719_33724 = G__33736;
continue;
}
} else
{var node_33737 = cljs.core.first.call(null,seq__33716_33731__$1);goog.dom.classes.set(node_33737,classes_33720__$1);
{
var G__33738 = cljs.core.next.call(null,seq__33716_33731__$1);
var G__33739 = null;
var G__33740 = 0;
var G__33741 = 0;
seq__33716_33721 = G__33738;
chunk__33717_33722 = G__33739;
count__33718_33723 = G__33740;
i__33719_33724 = G__33741;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__33746_33750 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33747_33751 = null;var count__33748_33752 = 0;var i__33749_33753 = 0;while(true){
if((i__33749_33753 < count__33748_33752))
{var node_33754 = cljs.core._nth.call(null,chunk__33747_33751,i__33749_33753);goog.dom.setTextContent(node_33754,value);
{
var G__33755 = seq__33746_33750;
var G__33756 = chunk__33747_33751;
var G__33757 = count__33748_33752;
var G__33758 = (i__33749_33753 + 1);
seq__33746_33750 = G__33755;
chunk__33747_33751 = G__33756;
count__33748_33752 = G__33757;
i__33749_33753 = G__33758;
continue;
}
} else
{var temp__4092__auto___33759 = cljs.core.seq.call(null,seq__33746_33750);if(temp__4092__auto___33759)
{var seq__33746_33760__$1 = temp__4092__auto___33759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33746_33760__$1))
{var c__4148__auto___33761 = cljs.core.chunk_first.call(null,seq__33746_33760__$1);{
var G__33762 = cljs.core.chunk_rest.call(null,seq__33746_33760__$1);
var G__33763 = c__4148__auto___33761;
var G__33764 = cljs.core.count.call(null,c__4148__auto___33761);
var G__33765 = 0;
seq__33746_33750 = G__33762;
chunk__33747_33751 = G__33763;
count__33748_33752 = G__33764;
i__33749_33753 = G__33765;
continue;
}
} else
{var node_33766 = cljs.core.first.call(null,seq__33746_33760__$1);goog.dom.setTextContent(node_33766,value);
{
var G__33767 = cljs.core.next.call(null,seq__33746_33760__$1);
var G__33768 = null;
var G__33769 = 0;
var G__33770 = 0;
seq__33746_33750 = G__33767;
chunk__33747_33751 = G__33768;
count__33748_33752 = G__33769;
i__33749_33753 = G__33770;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__33775_33779 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33776_33780 = null;var count__33777_33781 = 0;var i__33778_33782 = 0;while(true){
if((i__33778_33782 < count__33777_33781))
{var node_33783 = cljs.core._nth.call(null,chunk__33776_33780,i__33778_33782);goog.dom.forms.setValue(node_33783,value);
{
var G__33784 = seq__33775_33779;
var G__33785 = chunk__33776_33780;
var G__33786 = count__33777_33781;
var G__33787 = (i__33778_33782 + 1);
seq__33775_33779 = G__33784;
chunk__33776_33780 = G__33785;
count__33777_33781 = G__33786;
i__33778_33782 = G__33787;
continue;
}
} else
{var temp__4092__auto___33788 = cljs.core.seq.call(null,seq__33775_33779);if(temp__4092__auto___33788)
{var seq__33775_33789__$1 = temp__4092__auto___33788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33775_33789__$1))
{var c__4148__auto___33790 = cljs.core.chunk_first.call(null,seq__33775_33789__$1);{
var G__33791 = cljs.core.chunk_rest.call(null,seq__33775_33789__$1);
var G__33792 = c__4148__auto___33790;
var G__33793 = cljs.core.count.call(null,c__4148__auto___33790);
var G__33794 = 0;
seq__33775_33779 = G__33791;
chunk__33776_33780 = G__33792;
count__33777_33781 = G__33793;
i__33778_33782 = G__33794;
continue;
}
} else
{var node_33795 = cljs.core.first.call(null,seq__33775_33789__$1);goog.dom.forms.setValue(node_33795,value);
{
var G__33796 = cljs.core.next.call(null,seq__33775_33789__$1);
var G__33797 = null;
var G__33798 = 0;
var G__33799 = 0;
seq__33775_33779 = G__33796;
chunk__33776_33780 = G__33797;
count__33777_33781 = G__33798;
i__33778_33782 = G__33799;
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
{var value_33810 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__33806_33811 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33807_33812 = null;var count__33808_33813 = 0;var i__33809_33814 = 0;while(true){
if((i__33809_33814 < count__33808_33813))
{var node_33815 = cljs.core._nth.call(null,chunk__33807_33812,i__33809_33814);node_33815.innerHTML = value_33810;
{
var G__33816 = seq__33806_33811;
var G__33817 = chunk__33807_33812;
var G__33818 = count__33808_33813;
var G__33819 = (i__33809_33814 + 1);
seq__33806_33811 = G__33816;
chunk__33807_33812 = G__33817;
count__33808_33813 = G__33818;
i__33809_33814 = G__33819;
continue;
}
} else
{var temp__4092__auto___33820 = cljs.core.seq.call(null,seq__33806_33811);if(temp__4092__auto___33820)
{var seq__33806_33821__$1 = temp__4092__auto___33820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33806_33821__$1))
{var c__4148__auto___33822 = cljs.core.chunk_first.call(null,seq__33806_33821__$1);{
var G__33823 = cljs.core.chunk_rest.call(null,seq__33806_33821__$1);
var G__33824 = c__4148__auto___33822;
var G__33825 = cljs.core.count.call(null,c__4148__auto___33822);
var G__33826 = 0;
seq__33806_33811 = G__33823;
chunk__33807_33812 = G__33824;
count__33808_33813 = G__33825;
i__33809_33814 = G__33826;
continue;
}
} else
{var node_33827 = cljs.core.first.call(null,seq__33806_33821__$1);node_33827.innerHTML = value_33810;
{
var G__33828 = cljs.core.next.call(null,seq__33806_33821__$1);
var G__33829 = null;
var G__33830 = 0;
var G__33831 = 0;
seq__33806_33811 = G__33828;
chunk__33807_33812 = G__33829;
count__33808_33813 = G__33830;
i__33809_33814 = G__33831;
continue;
}
}
} else
{}
}
break;
}
}catch (e33805){if((e33805 instanceof Error))
{var e_33832 = e33805;domina.replace_children_BANG_.call(null,content,value_33810);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33805;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__33839_33843 = cljs.core.seq.call(null,children);var chunk__33840_33844 = null;var count__33841_33845 = 0;var i__33842_33846 = 0;while(true){
if((i__33842_33846 < count__33841_33845))
{var child_33847 = cljs.core._nth.call(null,chunk__33840_33844,i__33842_33846);frag.appendChild(child_33847);
{
var G__33848 = seq__33839_33843;
var G__33849 = chunk__33840_33844;
var G__33850 = count__33841_33845;
var G__33851 = (i__33842_33846 + 1);
seq__33839_33843 = G__33848;
chunk__33840_33844 = G__33849;
count__33841_33845 = G__33850;
i__33842_33846 = G__33851;
continue;
}
} else
{var temp__4092__auto___33852 = cljs.core.seq.call(null,seq__33839_33843);if(temp__4092__auto___33852)
{var seq__33839_33853__$1 = temp__4092__auto___33852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33839_33853__$1))
{var c__4148__auto___33854 = cljs.core.chunk_first.call(null,seq__33839_33853__$1);{
var G__33855 = cljs.core.chunk_rest.call(null,seq__33839_33853__$1);
var G__33856 = c__4148__auto___33854;
var G__33857 = cljs.core.count.call(null,c__4148__auto___33854);
var G__33858 = 0;
seq__33839_33843 = G__33855;
chunk__33840_33844 = G__33856;
count__33841_33845 = G__33857;
i__33842_33846 = G__33858;
continue;
}
} else
{var child_33859 = cljs.core.first.call(null,seq__33839_33853__$1);frag.appendChild(child_33859);
{
var G__33860 = cljs.core.next.call(null,seq__33839_33853__$1);
var G__33861 = null;
var G__33862 = 0;
var G__33863 = 0;
seq__33839_33843 = G__33860;
chunk__33840_33844 = G__33861;
count__33841_33845 = G__33862;
i__33842_33846 = G__33863;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__33833_SHARP_,p2__33834_SHARP_){return f.call(null,p1__33833_SHARP_,p2__33834_SHARP_);
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
{if((function (){var G__33865 = list_thing;if(G__33865)
{var bit__4050__auto__ = (G__33865.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33865.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33865.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33865);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33865);
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
{if((function (){var G__33866 = content;if(G__33866)
{var bit__4050__auto__ = (G__33866.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33866.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33866.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33866);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33866);
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
{if((function (){var G__33867 = content;if(G__33867)
{var bit__4050__auto__ = (G__33867.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33867.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33867.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33867);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33867);
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
