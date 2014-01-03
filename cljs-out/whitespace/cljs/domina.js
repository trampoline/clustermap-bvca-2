// Compiled by ClojureScript 0.0-2080
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
var opt_wrapper_49423 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_49424 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_49425 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_49424,table_section_wrapper_49424,opt_wrapper_49423,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_49425,table_section_wrapper_49424,cell_wrapper_49425,opt_wrapper_49423,table_section_wrapper_49424,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_49424]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__49430 = cljs.core.seq.call(null,tbody);var chunk__49431 = null;var count__49432 = 0;var i__49433 = 0;while(true){
if((i__49433 < count__49432))
{var child = cljs.core._nth.call(null,chunk__49431,i__49433);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__49434 = seq__49430;
var G__49435 = chunk__49431;
var G__49436 = count__49432;
var G__49437 = (i__49433 + 1);
seq__49430 = G__49434;
chunk__49431 = G__49435;
count__49432 = G__49436;
i__49433 = G__49437;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__49430);if(temp__4092__auto__)
{var seq__49430__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49430__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__49430__$1);{
var G__49438 = cljs.core.chunk_rest.call(null,seq__49430__$1);
var G__49439 = c__4015__auto__;
var G__49440 = cljs.core.count.call(null,c__4015__auto__);
var G__49441 = 0;
seq__49430 = G__49438;
chunk__49431 = G__49439;
count__49432 = G__49440;
i__49433 = G__49441;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__49430__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__49442 = cljs.core.next.call(null,seq__49430__$1);
var G__49443 = null;
var G__49444 = 0;
var G__49445 = 0;
seq__49430 = G__49442;
chunk__49431 = G__49443;
count__49432 = G__49444;
i__49433 = G__49445;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__49447 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__49447,0,null);var start_wrap = cljs.core.nth.call(null,vec__49447,1,null);var end_wrap = cljs.core.nth.call(null,vec__49447,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__49448 = wrapper.lastChild;
var G__49449 = (level - 1);
wrapper = G__49448;
level = G__49449;
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
if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3279__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3279__auto__;
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
domina.DomContent = (function (){var obj49451 = {};return obj49451;
})();
domina.nodes = (function nodes(content){if((function (){var and__3279__auto__ = content;if(and__3279__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3279__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3894__auto__ = (((content == null))?null:content);return (function (){var or__3291__auto__ = (domina.nodes[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.nodes["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3279__auto__ = nodeseq;if(and__3279__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3279__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3894__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3291__auto__ = (domina.single_node[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.single_node["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3279__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3279__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__49452){
var mesg = cljs.core.seq(arglist__49452);
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
log.cljs$lang$applyTo = (function (arglist__49453){
var mesg = cljs.core.seq(arglist__49453);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__49454){
var contents = cljs.core.seq(arglist__49454);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__49455_SHARP_){return p1__49455_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__49456_SHARP_,p2__49457_SHARP_){return goog.dom.insertChildAt(p1__49456_SHARP_,p2__49457_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__49459_SHARP_,p2__49458_SHARP_){return goog.dom.insertSiblingBefore(p2__49458_SHARP_,p1__49459_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__49461_SHARP_,p2__49460_SHARP_){return goog.dom.insertSiblingAfter(p2__49460_SHARP_,p1__49461_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__49463_SHARP_,p2__49462_SHARP_){return goog.dom.replaceNode(p2__49462_SHARP_,p1__49463_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__49468_49472 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49469_49473 = null;var count__49470_49474 = 0;var i__49471_49475 = 0;while(true){
if((i__49471_49475 < count__49470_49474))
{var n_49476 = cljs.core._nth.call(null,chunk__49469_49473,i__49471_49475);goog.style.setStyle(n_49476,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__49477 = seq__49468_49472;
var G__49478 = chunk__49469_49473;
var G__49479 = count__49470_49474;
var G__49480 = (i__49471_49475 + 1);
seq__49468_49472 = G__49477;
chunk__49469_49473 = G__49478;
count__49470_49474 = G__49479;
i__49471_49475 = G__49480;
continue;
}
} else
{var temp__4092__auto___49481 = cljs.core.seq.call(null,seq__49468_49472);if(temp__4092__auto___49481)
{var seq__49468_49482__$1 = temp__4092__auto___49481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49468_49482__$1))
{var c__4015__auto___49483 = cljs.core.chunk_first.call(null,seq__49468_49482__$1);{
var G__49484 = cljs.core.chunk_rest.call(null,seq__49468_49482__$1);
var G__49485 = c__4015__auto___49483;
var G__49486 = cljs.core.count.call(null,c__4015__auto___49483);
var G__49487 = 0;
seq__49468_49472 = G__49484;
chunk__49469_49473 = G__49485;
count__49470_49474 = G__49486;
i__49471_49475 = G__49487;
continue;
}
} else
{var n_49488 = cljs.core.first.call(null,seq__49468_49482__$1);goog.style.setStyle(n_49488,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__49489 = cljs.core.next.call(null,seq__49468_49482__$1);
var G__49490 = null;
var G__49491 = 0;
var G__49492 = 0;
seq__49468_49472 = G__49489;
chunk__49469_49473 = G__49490;
count__49470_49474 = G__49491;
i__49471_49475 = G__49492;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__49493){
var content = cljs.core.first(arglist__49493);
arglist__49493 = cljs.core.next(arglist__49493);
var name = cljs.core.first(arglist__49493);
var value = cljs.core.rest(arglist__49493);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__49498_49502 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49499_49503 = null;var count__49500_49504 = 0;var i__49501_49505 = 0;while(true){
if((i__49501_49505 < count__49500_49504))
{var n_49506 = cljs.core._nth.call(null,chunk__49499_49503,i__49501_49505);n_49506.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__49507 = seq__49498_49502;
var G__49508 = chunk__49499_49503;
var G__49509 = count__49500_49504;
var G__49510 = (i__49501_49505 + 1);
seq__49498_49502 = G__49507;
chunk__49499_49503 = G__49508;
count__49500_49504 = G__49509;
i__49501_49505 = G__49510;
continue;
}
} else
{var temp__4092__auto___49511 = cljs.core.seq.call(null,seq__49498_49502);if(temp__4092__auto___49511)
{var seq__49498_49512__$1 = temp__4092__auto___49511;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49498_49512__$1))
{var c__4015__auto___49513 = cljs.core.chunk_first.call(null,seq__49498_49512__$1);{
var G__49514 = cljs.core.chunk_rest.call(null,seq__49498_49512__$1);
var G__49515 = c__4015__auto___49513;
var G__49516 = cljs.core.count.call(null,c__4015__auto___49513);
var G__49517 = 0;
seq__49498_49502 = G__49514;
chunk__49499_49503 = G__49515;
count__49500_49504 = G__49516;
i__49501_49505 = G__49517;
continue;
}
} else
{var n_49518 = cljs.core.first.call(null,seq__49498_49512__$1);n_49518.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__49519 = cljs.core.next.call(null,seq__49498_49512__$1);
var G__49520 = null;
var G__49521 = 0;
var G__49522 = 0;
seq__49498_49502 = G__49519;
chunk__49499_49503 = G__49520;
count__49500_49504 = G__49521;
i__49501_49505 = G__49522;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__49523){
var content = cljs.core.first(arglist__49523);
arglist__49523 = cljs.core.next(arglist__49523);
var name = cljs.core.first(arglist__49523);
var value = cljs.core.rest(arglist__49523);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__49528_49532 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49529_49533 = null;var count__49530_49534 = 0;var i__49531_49535 = 0;while(true){
if((i__49531_49535 < count__49530_49534))
{var n_49536 = cljs.core._nth.call(null,chunk__49529_49533,i__49531_49535);n_49536.removeAttribute(cljs.core.name.call(null,name));
{
var G__49537 = seq__49528_49532;
var G__49538 = chunk__49529_49533;
var G__49539 = count__49530_49534;
var G__49540 = (i__49531_49535 + 1);
seq__49528_49532 = G__49537;
chunk__49529_49533 = G__49538;
count__49530_49534 = G__49539;
i__49531_49535 = G__49540;
continue;
}
} else
{var temp__4092__auto___49541 = cljs.core.seq.call(null,seq__49528_49532);if(temp__4092__auto___49541)
{var seq__49528_49542__$1 = temp__4092__auto___49541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49528_49542__$1))
{var c__4015__auto___49543 = cljs.core.chunk_first.call(null,seq__49528_49542__$1);{
var G__49544 = cljs.core.chunk_rest.call(null,seq__49528_49542__$1);
var G__49545 = c__4015__auto___49543;
var G__49546 = cljs.core.count.call(null,c__4015__auto___49543);
var G__49547 = 0;
seq__49528_49532 = G__49544;
chunk__49529_49533 = G__49545;
count__49530_49534 = G__49546;
i__49531_49535 = G__49547;
continue;
}
} else
{var n_49548 = cljs.core.first.call(null,seq__49528_49542__$1);n_49548.removeAttribute(cljs.core.name.call(null,name));
{
var G__49549 = cljs.core.next.call(null,seq__49528_49542__$1);
var G__49550 = null;
var G__49551 = 0;
var G__49552 = 0;
seq__49528_49532 = G__49549;
chunk__49529_49533 = G__49550;
count__49530_49534 = G__49551;
i__49531_49535 = G__49552;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__49554 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__49554,0,null);var v = cljs.core.nth.call(null,vec__49554,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
{return v;
} else
{return and__3279__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__49555_SHARP_){var attr = attrs__$1.item(p1__49555_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__49562_49568 = cljs.core.seq.call(null,styles);var chunk__49563_49569 = null;var count__49564_49570 = 0;var i__49565_49571 = 0;while(true){
if((i__49565_49571 < count__49564_49570))
{var vec__49566_49572 = cljs.core._nth.call(null,chunk__49563_49569,i__49565_49571);var name_49573 = cljs.core.nth.call(null,vec__49566_49572,0,null);var value_49574 = cljs.core.nth.call(null,vec__49566_49572,1,null);domina.set_style_BANG_.call(null,content,name_49573,value_49574);
{
var G__49575 = seq__49562_49568;
var G__49576 = chunk__49563_49569;
var G__49577 = count__49564_49570;
var G__49578 = (i__49565_49571 + 1);
seq__49562_49568 = G__49575;
chunk__49563_49569 = G__49576;
count__49564_49570 = G__49577;
i__49565_49571 = G__49578;
continue;
}
} else
{var temp__4092__auto___49579 = cljs.core.seq.call(null,seq__49562_49568);if(temp__4092__auto___49579)
{var seq__49562_49580__$1 = temp__4092__auto___49579;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49562_49580__$1))
{var c__4015__auto___49581 = cljs.core.chunk_first.call(null,seq__49562_49580__$1);{
var G__49582 = cljs.core.chunk_rest.call(null,seq__49562_49580__$1);
var G__49583 = c__4015__auto___49581;
var G__49584 = cljs.core.count.call(null,c__4015__auto___49581);
var G__49585 = 0;
seq__49562_49568 = G__49582;
chunk__49563_49569 = G__49583;
count__49564_49570 = G__49584;
i__49565_49571 = G__49585;
continue;
}
} else
{var vec__49567_49586 = cljs.core.first.call(null,seq__49562_49580__$1);var name_49587 = cljs.core.nth.call(null,vec__49567_49586,0,null);var value_49588 = cljs.core.nth.call(null,vec__49567_49586,1,null);domina.set_style_BANG_.call(null,content,name_49587,value_49588);
{
var G__49589 = cljs.core.next.call(null,seq__49562_49580__$1);
var G__49590 = null;
var G__49591 = 0;
var G__49592 = 0;
seq__49562_49568 = G__49589;
chunk__49563_49569 = G__49590;
count__49564_49570 = G__49591;
i__49565_49571 = G__49592;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__49599_49605 = cljs.core.seq.call(null,attrs);var chunk__49600_49606 = null;var count__49601_49607 = 0;var i__49602_49608 = 0;while(true){
if((i__49602_49608 < count__49601_49607))
{var vec__49603_49609 = cljs.core._nth.call(null,chunk__49600_49606,i__49602_49608);var name_49610 = cljs.core.nth.call(null,vec__49603_49609,0,null);var value_49611 = cljs.core.nth.call(null,vec__49603_49609,1,null);domina.set_attr_BANG_.call(null,content,name_49610,value_49611);
{
var G__49612 = seq__49599_49605;
var G__49613 = chunk__49600_49606;
var G__49614 = count__49601_49607;
var G__49615 = (i__49602_49608 + 1);
seq__49599_49605 = G__49612;
chunk__49600_49606 = G__49613;
count__49601_49607 = G__49614;
i__49602_49608 = G__49615;
continue;
}
} else
{var temp__4092__auto___49616 = cljs.core.seq.call(null,seq__49599_49605);if(temp__4092__auto___49616)
{var seq__49599_49617__$1 = temp__4092__auto___49616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49599_49617__$1))
{var c__4015__auto___49618 = cljs.core.chunk_first.call(null,seq__49599_49617__$1);{
var G__49619 = cljs.core.chunk_rest.call(null,seq__49599_49617__$1);
var G__49620 = c__4015__auto___49618;
var G__49621 = cljs.core.count.call(null,c__4015__auto___49618);
var G__49622 = 0;
seq__49599_49605 = G__49619;
chunk__49600_49606 = G__49620;
count__49601_49607 = G__49621;
i__49602_49608 = G__49622;
continue;
}
} else
{var vec__49604_49623 = cljs.core.first.call(null,seq__49599_49617__$1);var name_49624 = cljs.core.nth.call(null,vec__49604_49623,0,null);var value_49625 = cljs.core.nth.call(null,vec__49604_49623,1,null);domina.set_attr_BANG_.call(null,content,name_49624,value_49625);
{
var G__49626 = cljs.core.next.call(null,seq__49599_49617__$1);
var G__49627 = null;
var G__49628 = 0;
var G__49629 = 0;
seq__49599_49605 = G__49626;
chunk__49600_49606 = G__49627;
count__49601_49607 = G__49628;
i__49602_49608 = G__49629;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__49634_49638 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49635_49639 = null;var count__49636_49640 = 0;var i__49637_49641 = 0;while(true){
if((i__49637_49641 < count__49636_49640))
{var node_49642 = cljs.core._nth.call(null,chunk__49635_49639,i__49637_49641);goog.dom.classes.add(node_49642,class$);
{
var G__49643 = seq__49634_49638;
var G__49644 = chunk__49635_49639;
var G__49645 = count__49636_49640;
var G__49646 = (i__49637_49641 + 1);
seq__49634_49638 = G__49643;
chunk__49635_49639 = G__49644;
count__49636_49640 = G__49645;
i__49637_49641 = G__49646;
continue;
}
} else
{var temp__4092__auto___49647 = cljs.core.seq.call(null,seq__49634_49638);if(temp__4092__auto___49647)
{var seq__49634_49648__$1 = temp__4092__auto___49647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49634_49648__$1))
{var c__4015__auto___49649 = cljs.core.chunk_first.call(null,seq__49634_49648__$1);{
var G__49650 = cljs.core.chunk_rest.call(null,seq__49634_49648__$1);
var G__49651 = c__4015__auto___49649;
var G__49652 = cljs.core.count.call(null,c__4015__auto___49649);
var G__49653 = 0;
seq__49634_49638 = G__49650;
chunk__49635_49639 = G__49651;
count__49636_49640 = G__49652;
i__49637_49641 = G__49653;
continue;
}
} else
{var node_49654 = cljs.core.first.call(null,seq__49634_49648__$1);goog.dom.classes.add(node_49654,class$);
{
var G__49655 = cljs.core.next.call(null,seq__49634_49648__$1);
var G__49656 = null;
var G__49657 = 0;
var G__49658 = 0;
seq__49634_49638 = G__49655;
chunk__49635_49639 = G__49656;
count__49636_49640 = G__49657;
i__49637_49641 = G__49658;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__49663_49667 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49664_49668 = null;var count__49665_49669 = 0;var i__49666_49670 = 0;while(true){
if((i__49666_49670 < count__49665_49669))
{var node_49671 = cljs.core._nth.call(null,chunk__49664_49668,i__49666_49670);goog.dom.classes.remove(node_49671,class$);
{
var G__49672 = seq__49663_49667;
var G__49673 = chunk__49664_49668;
var G__49674 = count__49665_49669;
var G__49675 = (i__49666_49670 + 1);
seq__49663_49667 = G__49672;
chunk__49664_49668 = G__49673;
count__49665_49669 = G__49674;
i__49666_49670 = G__49675;
continue;
}
} else
{var temp__4092__auto___49676 = cljs.core.seq.call(null,seq__49663_49667);if(temp__4092__auto___49676)
{var seq__49663_49677__$1 = temp__4092__auto___49676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49663_49677__$1))
{var c__4015__auto___49678 = cljs.core.chunk_first.call(null,seq__49663_49677__$1);{
var G__49679 = cljs.core.chunk_rest.call(null,seq__49663_49677__$1);
var G__49680 = c__4015__auto___49678;
var G__49681 = cljs.core.count.call(null,c__4015__auto___49678);
var G__49682 = 0;
seq__49663_49667 = G__49679;
chunk__49664_49668 = G__49680;
count__49665_49669 = G__49681;
i__49666_49670 = G__49682;
continue;
}
} else
{var node_49683 = cljs.core.first.call(null,seq__49663_49677__$1);goog.dom.classes.remove(node_49683,class$);
{
var G__49684 = cljs.core.next.call(null,seq__49663_49677__$1);
var G__49685 = null;
var G__49686 = 0;
var G__49687 = 0;
seq__49663_49667 = G__49684;
chunk__49664_49668 = G__49685;
count__49665_49669 = G__49686;
i__49666_49670 = G__49687;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__49692_49696 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49693_49697 = null;var count__49694_49698 = 0;var i__49695_49699 = 0;while(true){
if((i__49695_49699 < count__49694_49698))
{var node_49700 = cljs.core._nth.call(null,chunk__49693_49697,i__49695_49699);goog.dom.classes.toggle(node_49700,class$);
{
var G__49701 = seq__49692_49696;
var G__49702 = chunk__49693_49697;
var G__49703 = count__49694_49698;
var G__49704 = (i__49695_49699 + 1);
seq__49692_49696 = G__49701;
chunk__49693_49697 = G__49702;
count__49694_49698 = G__49703;
i__49695_49699 = G__49704;
continue;
}
} else
{var temp__4092__auto___49705 = cljs.core.seq.call(null,seq__49692_49696);if(temp__4092__auto___49705)
{var seq__49692_49706__$1 = temp__4092__auto___49705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49692_49706__$1))
{var c__4015__auto___49707 = cljs.core.chunk_first.call(null,seq__49692_49706__$1);{
var G__49708 = cljs.core.chunk_rest.call(null,seq__49692_49706__$1);
var G__49709 = c__4015__auto___49707;
var G__49710 = cljs.core.count.call(null,c__4015__auto___49707);
var G__49711 = 0;
seq__49692_49696 = G__49708;
chunk__49693_49697 = G__49709;
count__49694_49698 = G__49710;
i__49695_49699 = G__49711;
continue;
}
} else
{var node_49712 = cljs.core.first.call(null,seq__49692_49706__$1);goog.dom.classes.toggle(node_49712,class$);
{
var G__49713 = cljs.core.next.call(null,seq__49692_49706__$1);
var G__49714 = null;
var G__49715 = 0;
var G__49716 = 0;
seq__49692_49696 = G__49713;
chunk__49693_49697 = G__49714;
count__49694_49698 = G__49715;
i__49695_49699 = G__49716;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_49725__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__49721_49726 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49722_49727 = null;var count__49723_49728 = 0;var i__49724_49729 = 0;while(true){
if((i__49724_49729 < count__49723_49728))
{var node_49730 = cljs.core._nth.call(null,chunk__49722_49727,i__49724_49729);goog.dom.classes.set(node_49730,classes_49725__$1);
{
var G__49731 = seq__49721_49726;
var G__49732 = chunk__49722_49727;
var G__49733 = count__49723_49728;
var G__49734 = (i__49724_49729 + 1);
seq__49721_49726 = G__49731;
chunk__49722_49727 = G__49732;
count__49723_49728 = G__49733;
i__49724_49729 = G__49734;
continue;
}
} else
{var temp__4092__auto___49735 = cljs.core.seq.call(null,seq__49721_49726);if(temp__4092__auto___49735)
{var seq__49721_49736__$1 = temp__4092__auto___49735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49721_49736__$1))
{var c__4015__auto___49737 = cljs.core.chunk_first.call(null,seq__49721_49736__$1);{
var G__49738 = cljs.core.chunk_rest.call(null,seq__49721_49736__$1);
var G__49739 = c__4015__auto___49737;
var G__49740 = cljs.core.count.call(null,c__4015__auto___49737);
var G__49741 = 0;
seq__49721_49726 = G__49738;
chunk__49722_49727 = G__49739;
count__49723_49728 = G__49740;
i__49724_49729 = G__49741;
continue;
}
} else
{var node_49742 = cljs.core.first.call(null,seq__49721_49736__$1);goog.dom.classes.set(node_49742,classes_49725__$1);
{
var G__49743 = cljs.core.next.call(null,seq__49721_49736__$1);
var G__49744 = null;
var G__49745 = 0;
var G__49746 = 0;
seq__49721_49726 = G__49743;
chunk__49722_49727 = G__49744;
count__49723_49728 = G__49745;
i__49724_49729 = G__49746;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__49751_49755 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49752_49756 = null;var count__49753_49757 = 0;var i__49754_49758 = 0;while(true){
if((i__49754_49758 < count__49753_49757))
{var node_49759 = cljs.core._nth.call(null,chunk__49752_49756,i__49754_49758);goog.dom.setTextContent(node_49759,value);
{
var G__49760 = seq__49751_49755;
var G__49761 = chunk__49752_49756;
var G__49762 = count__49753_49757;
var G__49763 = (i__49754_49758 + 1);
seq__49751_49755 = G__49760;
chunk__49752_49756 = G__49761;
count__49753_49757 = G__49762;
i__49754_49758 = G__49763;
continue;
}
} else
{var temp__4092__auto___49764 = cljs.core.seq.call(null,seq__49751_49755);if(temp__4092__auto___49764)
{var seq__49751_49765__$1 = temp__4092__auto___49764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49751_49765__$1))
{var c__4015__auto___49766 = cljs.core.chunk_first.call(null,seq__49751_49765__$1);{
var G__49767 = cljs.core.chunk_rest.call(null,seq__49751_49765__$1);
var G__49768 = c__4015__auto___49766;
var G__49769 = cljs.core.count.call(null,c__4015__auto___49766);
var G__49770 = 0;
seq__49751_49755 = G__49767;
chunk__49752_49756 = G__49768;
count__49753_49757 = G__49769;
i__49754_49758 = G__49770;
continue;
}
} else
{var node_49771 = cljs.core.first.call(null,seq__49751_49765__$1);goog.dom.setTextContent(node_49771,value);
{
var G__49772 = cljs.core.next.call(null,seq__49751_49765__$1);
var G__49773 = null;
var G__49774 = 0;
var G__49775 = 0;
seq__49751_49755 = G__49772;
chunk__49752_49756 = G__49773;
count__49753_49757 = G__49774;
i__49754_49758 = G__49775;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__49780_49784 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49781_49785 = null;var count__49782_49786 = 0;var i__49783_49787 = 0;while(true){
if((i__49783_49787 < count__49782_49786))
{var node_49788 = cljs.core._nth.call(null,chunk__49781_49785,i__49783_49787);goog.dom.forms.setValue(node_49788,value);
{
var G__49789 = seq__49780_49784;
var G__49790 = chunk__49781_49785;
var G__49791 = count__49782_49786;
var G__49792 = (i__49783_49787 + 1);
seq__49780_49784 = G__49789;
chunk__49781_49785 = G__49790;
count__49782_49786 = G__49791;
i__49783_49787 = G__49792;
continue;
}
} else
{var temp__4092__auto___49793 = cljs.core.seq.call(null,seq__49780_49784);if(temp__4092__auto___49793)
{var seq__49780_49794__$1 = temp__4092__auto___49793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49780_49794__$1))
{var c__4015__auto___49795 = cljs.core.chunk_first.call(null,seq__49780_49794__$1);{
var G__49796 = cljs.core.chunk_rest.call(null,seq__49780_49794__$1);
var G__49797 = c__4015__auto___49795;
var G__49798 = cljs.core.count.call(null,c__4015__auto___49795);
var G__49799 = 0;
seq__49780_49784 = G__49796;
chunk__49781_49785 = G__49797;
count__49782_49786 = G__49798;
i__49783_49787 = G__49799;
continue;
}
} else
{var node_49800 = cljs.core.first.call(null,seq__49780_49794__$1);goog.dom.forms.setValue(node_49800,value);
{
var G__49801 = cljs.core.next.call(null,seq__49780_49794__$1);
var G__49802 = null;
var G__49803 = 0;
var G__49804 = 0;
seq__49780_49784 = G__49801;
chunk__49781_49785 = G__49802;
count__49782_49786 = G__49803;
i__49783_49787 = G__49804;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3279__auto__ = allows_inner_html_QMARK_;if(and__3279__auto__)
{var and__3279__auto____$1 = (function (){var or__3291__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3279__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var value_49815 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__49811_49816 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49812_49817 = null;var count__49813_49818 = 0;var i__49814_49819 = 0;while(true){
if((i__49814_49819 < count__49813_49818))
{var node_49820 = cljs.core._nth.call(null,chunk__49812_49817,i__49814_49819);node_49820.innerHTML = value_49815;
{
var G__49821 = seq__49811_49816;
var G__49822 = chunk__49812_49817;
var G__49823 = count__49813_49818;
var G__49824 = (i__49814_49819 + 1);
seq__49811_49816 = G__49821;
chunk__49812_49817 = G__49822;
count__49813_49818 = G__49823;
i__49814_49819 = G__49824;
continue;
}
} else
{var temp__4092__auto___49825 = cljs.core.seq.call(null,seq__49811_49816);if(temp__4092__auto___49825)
{var seq__49811_49826__$1 = temp__4092__auto___49825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49811_49826__$1))
{var c__4015__auto___49827 = cljs.core.chunk_first.call(null,seq__49811_49826__$1);{
var G__49828 = cljs.core.chunk_rest.call(null,seq__49811_49826__$1);
var G__49829 = c__4015__auto___49827;
var G__49830 = cljs.core.count.call(null,c__4015__auto___49827);
var G__49831 = 0;
seq__49811_49816 = G__49828;
chunk__49812_49817 = G__49829;
count__49813_49818 = G__49830;
i__49814_49819 = G__49831;
continue;
}
} else
{var node_49832 = cljs.core.first.call(null,seq__49811_49826__$1);node_49832.innerHTML = value_49815;
{
var G__49833 = cljs.core.next.call(null,seq__49811_49826__$1);
var G__49834 = null;
var G__49835 = 0;
var G__49836 = 0;
seq__49811_49816 = G__49833;
chunk__49812_49817 = G__49834;
count__49813_49818 = G__49835;
i__49814_49819 = G__49836;
continue;
}
}
} else
{}
}
break;
}
}catch (e49810){if((e49810 instanceof Error))
{var e_49837 = e49810;domina.replace_children_BANG_.call(null,content,value_49815);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49810;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3279__auto__ = bubble;if(cljs.core.truth_(and__3279__auto__))
{return (value == null);
} else
{return and__3279__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3291__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__49844_49848 = cljs.core.seq.call(null,children);var chunk__49845_49849 = null;var count__49846_49850 = 0;var i__49847_49851 = 0;while(true){
if((i__49847_49851 < count__49846_49850))
{var child_49852 = cljs.core._nth.call(null,chunk__49845_49849,i__49847_49851);frag.appendChild(child_49852);
{
var G__49853 = seq__49844_49848;
var G__49854 = chunk__49845_49849;
var G__49855 = count__49846_49850;
var G__49856 = (i__49847_49851 + 1);
seq__49844_49848 = G__49853;
chunk__49845_49849 = G__49854;
count__49846_49850 = G__49855;
i__49847_49851 = G__49856;
continue;
}
} else
{var temp__4092__auto___49857 = cljs.core.seq.call(null,seq__49844_49848);if(temp__4092__auto___49857)
{var seq__49844_49858__$1 = temp__4092__auto___49857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49844_49858__$1))
{var c__4015__auto___49859 = cljs.core.chunk_first.call(null,seq__49844_49858__$1);{
var G__49860 = cljs.core.chunk_rest.call(null,seq__49844_49858__$1);
var G__49861 = c__4015__auto___49859;
var G__49862 = cljs.core.count.call(null,c__4015__auto___49859);
var G__49863 = 0;
seq__49844_49848 = G__49860;
chunk__49845_49849 = G__49861;
count__49846_49850 = G__49862;
i__49847_49851 = G__49863;
continue;
}
} else
{var child_49864 = cljs.core.first.call(null,seq__49844_49858__$1);frag.appendChild(child_49864);
{
var G__49865 = cljs.core.next.call(null,seq__49844_49858__$1);
var G__49866 = null;
var G__49867 = 0;
var G__49868 = 0;
seq__49844_49848 = G__49865;
chunk__49845_49849 = G__49866;
count__49846_49850 = G__49867;
i__49847_49851 = G__49868;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__49838_SHARP_,p2__49839_SHARP_){return f.call(null,p1__49838_SHARP_,p2__49839_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3279__auto__ = obj;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3279__auto____$1)
{return obj.length;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
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
{if((function (){var G__49870 = list_thing;if(G__49870)
{var bit__3917__auto__ = (G__49870.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__49870.cljs$core$ISeqable$))
{return true;
} else
{if((!G__49870.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__49870);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__49870);
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
{if((function (){var G__49871 = content;if(G__49871)
{var bit__3917__auto__ = (G__49871.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__49871.cljs$core$ISeqable$))
{return true;
} else
{if((!G__49871.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__49871);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__49871);
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
{if((function (){var G__49872 = content;if(G__49872)
{var bit__3917__auto__ = (G__49872.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__49872.cljs$core$ISeqable$))
{return true;
} else
{if((!G__49872.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__49872);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__49872);
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
