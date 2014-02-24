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
var opt_wrapper_38278 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_38279 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_38280 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_38279,table_section_wrapper_38279,opt_wrapper_38278,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_38280,table_section_wrapper_38279,cell_wrapper_38280,opt_wrapper_38278,table_section_wrapper_38279,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_38279]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__38285 = cljs.core.seq.call(null,tbody);var chunk__38286 = null;var count__38287 = 0;var i__38288 = 0;while(true){
if((i__38288 < count__38287))
{var child = cljs.core._nth.call(null,chunk__38286,i__38288);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38289 = seq__38285;
var G__38290 = chunk__38286;
var G__38291 = count__38287;
var G__38292 = (i__38288 + 1);
seq__38285 = G__38289;
chunk__38286 = G__38290;
count__38287 = G__38291;
i__38288 = G__38292;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38285);if(temp__4092__auto__)
{var seq__38285__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38285__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38285__$1);{
var G__38293 = cljs.core.chunk_rest.call(null,seq__38285__$1);
var G__38294 = c__4148__auto__;
var G__38295 = cljs.core.count.call(null,c__4148__auto__);
var G__38296 = 0;
seq__38285 = G__38293;
chunk__38286 = G__38294;
count__38287 = G__38295;
i__38288 = G__38296;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__38285__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__38297 = cljs.core.next.call(null,seq__38285__$1);
var G__38298 = null;
var G__38299 = 0;
var G__38300 = 0;
seq__38285 = G__38297;
chunk__38286 = G__38298;
count__38287 = G__38299;
i__38288 = G__38300;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__38302 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__38302,0,null);var start_wrap = cljs.core.nth.call(null,vec__38302,1,null);var end_wrap = cljs.core.nth.call(null,vec__38302,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__38303 = wrapper.lastChild;
var G__38304 = (level - 1);
wrapper = G__38303;
level = G__38304;
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
domina.DomContent = (function (){var obj38306 = {};return obj38306;
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
log_debug.cljs$lang$applyTo = (function (arglist__38307){
var mesg = cljs.core.seq(arglist__38307);
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
log.cljs$lang$applyTo = (function (arglist__38308){
var mesg = cljs.core.seq(arglist__38308);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__38309){
var contents = cljs.core.seq(arglist__38309);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__38310_SHARP_){return p1__38310_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__38311_SHARP_,p2__38312_SHARP_){return goog.dom.insertChildAt(p1__38311_SHARP_,p2__38312_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38314_SHARP_,p2__38313_SHARP_){return goog.dom.insertSiblingBefore(p2__38313_SHARP_,p1__38314_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__38316_SHARP_,p2__38315_SHARP_){return goog.dom.insertSiblingAfter(p2__38315_SHARP_,p1__38316_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__38318_SHARP_,p2__38317_SHARP_){return goog.dom.replaceNode(p2__38317_SHARP_,p1__38318_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__38323_38327 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38324_38328 = null;var count__38325_38329 = 0;var i__38326_38330 = 0;while(true){
if((i__38326_38330 < count__38325_38329))
{var n_38331 = cljs.core._nth.call(null,chunk__38324_38328,i__38326_38330);goog.style.setStyle(n_38331,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38332 = seq__38323_38327;
var G__38333 = chunk__38324_38328;
var G__38334 = count__38325_38329;
var G__38335 = (i__38326_38330 + 1);
seq__38323_38327 = G__38332;
chunk__38324_38328 = G__38333;
count__38325_38329 = G__38334;
i__38326_38330 = G__38335;
continue;
}
} else
{var temp__4092__auto___38336 = cljs.core.seq.call(null,seq__38323_38327);if(temp__4092__auto___38336)
{var seq__38323_38337__$1 = temp__4092__auto___38336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38323_38337__$1))
{var c__4148__auto___38338 = cljs.core.chunk_first.call(null,seq__38323_38337__$1);{
var G__38339 = cljs.core.chunk_rest.call(null,seq__38323_38337__$1);
var G__38340 = c__4148__auto___38338;
var G__38341 = cljs.core.count.call(null,c__4148__auto___38338);
var G__38342 = 0;
seq__38323_38327 = G__38339;
chunk__38324_38328 = G__38340;
count__38325_38329 = G__38341;
i__38326_38330 = G__38342;
continue;
}
} else
{var n_38343 = cljs.core.first.call(null,seq__38323_38337__$1);goog.style.setStyle(n_38343,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38344 = cljs.core.next.call(null,seq__38323_38337__$1);
var G__38345 = null;
var G__38346 = 0;
var G__38347 = 0;
seq__38323_38327 = G__38344;
chunk__38324_38328 = G__38345;
count__38325_38329 = G__38346;
i__38326_38330 = G__38347;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__38348){
var content = cljs.core.first(arglist__38348);
arglist__38348 = cljs.core.next(arglist__38348);
var name = cljs.core.first(arglist__38348);
var value = cljs.core.rest(arglist__38348);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__38353_38357 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38354_38358 = null;var count__38355_38359 = 0;var i__38356_38360 = 0;while(true){
if((i__38356_38360 < count__38355_38359))
{var n_38361 = cljs.core._nth.call(null,chunk__38354_38358,i__38356_38360);n_38361.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38362 = seq__38353_38357;
var G__38363 = chunk__38354_38358;
var G__38364 = count__38355_38359;
var G__38365 = (i__38356_38360 + 1);
seq__38353_38357 = G__38362;
chunk__38354_38358 = G__38363;
count__38355_38359 = G__38364;
i__38356_38360 = G__38365;
continue;
}
} else
{var temp__4092__auto___38366 = cljs.core.seq.call(null,seq__38353_38357);if(temp__4092__auto___38366)
{var seq__38353_38367__$1 = temp__4092__auto___38366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38353_38367__$1))
{var c__4148__auto___38368 = cljs.core.chunk_first.call(null,seq__38353_38367__$1);{
var G__38369 = cljs.core.chunk_rest.call(null,seq__38353_38367__$1);
var G__38370 = c__4148__auto___38368;
var G__38371 = cljs.core.count.call(null,c__4148__auto___38368);
var G__38372 = 0;
seq__38353_38357 = G__38369;
chunk__38354_38358 = G__38370;
count__38355_38359 = G__38371;
i__38356_38360 = G__38372;
continue;
}
} else
{var n_38373 = cljs.core.first.call(null,seq__38353_38367__$1);n_38373.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__38374 = cljs.core.next.call(null,seq__38353_38367__$1);
var G__38375 = null;
var G__38376 = 0;
var G__38377 = 0;
seq__38353_38357 = G__38374;
chunk__38354_38358 = G__38375;
count__38355_38359 = G__38376;
i__38356_38360 = G__38377;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__38378){
var content = cljs.core.first(arglist__38378);
arglist__38378 = cljs.core.next(arglist__38378);
var name = cljs.core.first(arglist__38378);
var value = cljs.core.rest(arglist__38378);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__38383_38387 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38384_38388 = null;var count__38385_38389 = 0;var i__38386_38390 = 0;while(true){
if((i__38386_38390 < count__38385_38389))
{var n_38391 = cljs.core._nth.call(null,chunk__38384_38388,i__38386_38390);n_38391.removeAttribute(cljs.core.name.call(null,name));
{
var G__38392 = seq__38383_38387;
var G__38393 = chunk__38384_38388;
var G__38394 = count__38385_38389;
var G__38395 = (i__38386_38390 + 1);
seq__38383_38387 = G__38392;
chunk__38384_38388 = G__38393;
count__38385_38389 = G__38394;
i__38386_38390 = G__38395;
continue;
}
} else
{var temp__4092__auto___38396 = cljs.core.seq.call(null,seq__38383_38387);if(temp__4092__auto___38396)
{var seq__38383_38397__$1 = temp__4092__auto___38396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38383_38397__$1))
{var c__4148__auto___38398 = cljs.core.chunk_first.call(null,seq__38383_38397__$1);{
var G__38399 = cljs.core.chunk_rest.call(null,seq__38383_38397__$1);
var G__38400 = c__4148__auto___38398;
var G__38401 = cljs.core.count.call(null,c__4148__auto___38398);
var G__38402 = 0;
seq__38383_38387 = G__38399;
chunk__38384_38388 = G__38400;
count__38385_38389 = G__38401;
i__38386_38390 = G__38402;
continue;
}
} else
{var n_38403 = cljs.core.first.call(null,seq__38383_38397__$1);n_38403.removeAttribute(cljs.core.name.call(null,name));
{
var G__38404 = cljs.core.next.call(null,seq__38383_38397__$1);
var G__38405 = null;
var G__38406 = 0;
var G__38407 = 0;
seq__38383_38387 = G__38404;
chunk__38384_38388 = G__38405;
count__38385_38389 = G__38406;
i__38386_38390 = G__38407;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__38409 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__38409,0,null);var v = cljs.core.nth.call(null,vec__38409,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__38410_SHARP_){var attr = attrs__$1.item(p1__38410_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__38417_38423 = cljs.core.seq.call(null,styles);var chunk__38418_38424 = null;var count__38419_38425 = 0;var i__38420_38426 = 0;while(true){
if((i__38420_38426 < count__38419_38425))
{var vec__38421_38427 = cljs.core._nth.call(null,chunk__38418_38424,i__38420_38426);var name_38428 = cljs.core.nth.call(null,vec__38421_38427,0,null);var value_38429 = cljs.core.nth.call(null,vec__38421_38427,1,null);domina.set_style_BANG_.call(null,content,name_38428,value_38429);
{
var G__38430 = seq__38417_38423;
var G__38431 = chunk__38418_38424;
var G__38432 = count__38419_38425;
var G__38433 = (i__38420_38426 + 1);
seq__38417_38423 = G__38430;
chunk__38418_38424 = G__38431;
count__38419_38425 = G__38432;
i__38420_38426 = G__38433;
continue;
}
} else
{var temp__4092__auto___38434 = cljs.core.seq.call(null,seq__38417_38423);if(temp__4092__auto___38434)
{var seq__38417_38435__$1 = temp__4092__auto___38434;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38417_38435__$1))
{var c__4148__auto___38436 = cljs.core.chunk_first.call(null,seq__38417_38435__$1);{
var G__38437 = cljs.core.chunk_rest.call(null,seq__38417_38435__$1);
var G__38438 = c__4148__auto___38436;
var G__38439 = cljs.core.count.call(null,c__4148__auto___38436);
var G__38440 = 0;
seq__38417_38423 = G__38437;
chunk__38418_38424 = G__38438;
count__38419_38425 = G__38439;
i__38420_38426 = G__38440;
continue;
}
} else
{var vec__38422_38441 = cljs.core.first.call(null,seq__38417_38435__$1);var name_38442 = cljs.core.nth.call(null,vec__38422_38441,0,null);var value_38443 = cljs.core.nth.call(null,vec__38422_38441,1,null);domina.set_style_BANG_.call(null,content,name_38442,value_38443);
{
var G__38444 = cljs.core.next.call(null,seq__38417_38435__$1);
var G__38445 = null;
var G__38446 = 0;
var G__38447 = 0;
seq__38417_38423 = G__38444;
chunk__38418_38424 = G__38445;
count__38419_38425 = G__38446;
i__38420_38426 = G__38447;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__38454_38460 = cljs.core.seq.call(null,attrs);var chunk__38455_38461 = null;var count__38456_38462 = 0;var i__38457_38463 = 0;while(true){
if((i__38457_38463 < count__38456_38462))
{var vec__38458_38464 = cljs.core._nth.call(null,chunk__38455_38461,i__38457_38463);var name_38465 = cljs.core.nth.call(null,vec__38458_38464,0,null);var value_38466 = cljs.core.nth.call(null,vec__38458_38464,1,null);domina.set_attr_BANG_.call(null,content,name_38465,value_38466);
{
var G__38467 = seq__38454_38460;
var G__38468 = chunk__38455_38461;
var G__38469 = count__38456_38462;
var G__38470 = (i__38457_38463 + 1);
seq__38454_38460 = G__38467;
chunk__38455_38461 = G__38468;
count__38456_38462 = G__38469;
i__38457_38463 = G__38470;
continue;
}
} else
{var temp__4092__auto___38471 = cljs.core.seq.call(null,seq__38454_38460);if(temp__4092__auto___38471)
{var seq__38454_38472__$1 = temp__4092__auto___38471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38454_38472__$1))
{var c__4148__auto___38473 = cljs.core.chunk_first.call(null,seq__38454_38472__$1);{
var G__38474 = cljs.core.chunk_rest.call(null,seq__38454_38472__$1);
var G__38475 = c__4148__auto___38473;
var G__38476 = cljs.core.count.call(null,c__4148__auto___38473);
var G__38477 = 0;
seq__38454_38460 = G__38474;
chunk__38455_38461 = G__38475;
count__38456_38462 = G__38476;
i__38457_38463 = G__38477;
continue;
}
} else
{var vec__38459_38478 = cljs.core.first.call(null,seq__38454_38472__$1);var name_38479 = cljs.core.nth.call(null,vec__38459_38478,0,null);var value_38480 = cljs.core.nth.call(null,vec__38459_38478,1,null);domina.set_attr_BANG_.call(null,content,name_38479,value_38480);
{
var G__38481 = cljs.core.next.call(null,seq__38454_38472__$1);
var G__38482 = null;
var G__38483 = 0;
var G__38484 = 0;
seq__38454_38460 = G__38481;
chunk__38455_38461 = G__38482;
count__38456_38462 = G__38483;
i__38457_38463 = G__38484;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__38489_38493 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38490_38494 = null;var count__38491_38495 = 0;var i__38492_38496 = 0;while(true){
if((i__38492_38496 < count__38491_38495))
{var node_38497 = cljs.core._nth.call(null,chunk__38490_38494,i__38492_38496);goog.dom.classes.add(node_38497,class$);
{
var G__38498 = seq__38489_38493;
var G__38499 = chunk__38490_38494;
var G__38500 = count__38491_38495;
var G__38501 = (i__38492_38496 + 1);
seq__38489_38493 = G__38498;
chunk__38490_38494 = G__38499;
count__38491_38495 = G__38500;
i__38492_38496 = G__38501;
continue;
}
} else
{var temp__4092__auto___38502 = cljs.core.seq.call(null,seq__38489_38493);if(temp__4092__auto___38502)
{var seq__38489_38503__$1 = temp__4092__auto___38502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38489_38503__$1))
{var c__4148__auto___38504 = cljs.core.chunk_first.call(null,seq__38489_38503__$1);{
var G__38505 = cljs.core.chunk_rest.call(null,seq__38489_38503__$1);
var G__38506 = c__4148__auto___38504;
var G__38507 = cljs.core.count.call(null,c__4148__auto___38504);
var G__38508 = 0;
seq__38489_38493 = G__38505;
chunk__38490_38494 = G__38506;
count__38491_38495 = G__38507;
i__38492_38496 = G__38508;
continue;
}
} else
{var node_38509 = cljs.core.first.call(null,seq__38489_38503__$1);goog.dom.classes.add(node_38509,class$);
{
var G__38510 = cljs.core.next.call(null,seq__38489_38503__$1);
var G__38511 = null;
var G__38512 = 0;
var G__38513 = 0;
seq__38489_38493 = G__38510;
chunk__38490_38494 = G__38511;
count__38491_38495 = G__38512;
i__38492_38496 = G__38513;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__38518_38522 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38519_38523 = null;var count__38520_38524 = 0;var i__38521_38525 = 0;while(true){
if((i__38521_38525 < count__38520_38524))
{var node_38526 = cljs.core._nth.call(null,chunk__38519_38523,i__38521_38525);goog.dom.classes.remove(node_38526,class$);
{
var G__38527 = seq__38518_38522;
var G__38528 = chunk__38519_38523;
var G__38529 = count__38520_38524;
var G__38530 = (i__38521_38525 + 1);
seq__38518_38522 = G__38527;
chunk__38519_38523 = G__38528;
count__38520_38524 = G__38529;
i__38521_38525 = G__38530;
continue;
}
} else
{var temp__4092__auto___38531 = cljs.core.seq.call(null,seq__38518_38522);if(temp__4092__auto___38531)
{var seq__38518_38532__$1 = temp__4092__auto___38531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38518_38532__$1))
{var c__4148__auto___38533 = cljs.core.chunk_first.call(null,seq__38518_38532__$1);{
var G__38534 = cljs.core.chunk_rest.call(null,seq__38518_38532__$1);
var G__38535 = c__4148__auto___38533;
var G__38536 = cljs.core.count.call(null,c__4148__auto___38533);
var G__38537 = 0;
seq__38518_38522 = G__38534;
chunk__38519_38523 = G__38535;
count__38520_38524 = G__38536;
i__38521_38525 = G__38537;
continue;
}
} else
{var node_38538 = cljs.core.first.call(null,seq__38518_38532__$1);goog.dom.classes.remove(node_38538,class$);
{
var G__38539 = cljs.core.next.call(null,seq__38518_38532__$1);
var G__38540 = null;
var G__38541 = 0;
var G__38542 = 0;
seq__38518_38522 = G__38539;
chunk__38519_38523 = G__38540;
count__38520_38524 = G__38541;
i__38521_38525 = G__38542;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__38547_38551 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38548_38552 = null;var count__38549_38553 = 0;var i__38550_38554 = 0;while(true){
if((i__38550_38554 < count__38549_38553))
{var node_38555 = cljs.core._nth.call(null,chunk__38548_38552,i__38550_38554);goog.dom.classes.toggle(node_38555,class$);
{
var G__38556 = seq__38547_38551;
var G__38557 = chunk__38548_38552;
var G__38558 = count__38549_38553;
var G__38559 = (i__38550_38554 + 1);
seq__38547_38551 = G__38556;
chunk__38548_38552 = G__38557;
count__38549_38553 = G__38558;
i__38550_38554 = G__38559;
continue;
}
} else
{var temp__4092__auto___38560 = cljs.core.seq.call(null,seq__38547_38551);if(temp__4092__auto___38560)
{var seq__38547_38561__$1 = temp__4092__auto___38560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38547_38561__$1))
{var c__4148__auto___38562 = cljs.core.chunk_first.call(null,seq__38547_38561__$1);{
var G__38563 = cljs.core.chunk_rest.call(null,seq__38547_38561__$1);
var G__38564 = c__4148__auto___38562;
var G__38565 = cljs.core.count.call(null,c__4148__auto___38562);
var G__38566 = 0;
seq__38547_38551 = G__38563;
chunk__38548_38552 = G__38564;
count__38549_38553 = G__38565;
i__38550_38554 = G__38566;
continue;
}
} else
{var node_38567 = cljs.core.first.call(null,seq__38547_38561__$1);goog.dom.classes.toggle(node_38567,class$);
{
var G__38568 = cljs.core.next.call(null,seq__38547_38561__$1);
var G__38569 = null;
var G__38570 = 0;
var G__38571 = 0;
seq__38547_38551 = G__38568;
chunk__38548_38552 = G__38569;
count__38549_38553 = G__38570;
i__38550_38554 = G__38571;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_38580__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__38576_38581 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38577_38582 = null;var count__38578_38583 = 0;var i__38579_38584 = 0;while(true){
if((i__38579_38584 < count__38578_38583))
{var node_38585 = cljs.core._nth.call(null,chunk__38577_38582,i__38579_38584);goog.dom.classes.set(node_38585,classes_38580__$1);
{
var G__38586 = seq__38576_38581;
var G__38587 = chunk__38577_38582;
var G__38588 = count__38578_38583;
var G__38589 = (i__38579_38584 + 1);
seq__38576_38581 = G__38586;
chunk__38577_38582 = G__38587;
count__38578_38583 = G__38588;
i__38579_38584 = G__38589;
continue;
}
} else
{var temp__4092__auto___38590 = cljs.core.seq.call(null,seq__38576_38581);if(temp__4092__auto___38590)
{var seq__38576_38591__$1 = temp__4092__auto___38590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38576_38591__$1))
{var c__4148__auto___38592 = cljs.core.chunk_first.call(null,seq__38576_38591__$1);{
var G__38593 = cljs.core.chunk_rest.call(null,seq__38576_38591__$1);
var G__38594 = c__4148__auto___38592;
var G__38595 = cljs.core.count.call(null,c__4148__auto___38592);
var G__38596 = 0;
seq__38576_38581 = G__38593;
chunk__38577_38582 = G__38594;
count__38578_38583 = G__38595;
i__38579_38584 = G__38596;
continue;
}
} else
{var node_38597 = cljs.core.first.call(null,seq__38576_38591__$1);goog.dom.classes.set(node_38597,classes_38580__$1);
{
var G__38598 = cljs.core.next.call(null,seq__38576_38591__$1);
var G__38599 = null;
var G__38600 = 0;
var G__38601 = 0;
seq__38576_38581 = G__38598;
chunk__38577_38582 = G__38599;
count__38578_38583 = G__38600;
i__38579_38584 = G__38601;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__38606_38610 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38607_38611 = null;var count__38608_38612 = 0;var i__38609_38613 = 0;while(true){
if((i__38609_38613 < count__38608_38612))
{var node_38614 = cljs.core._nth.call(null,chunk__38607_38611,i__38609_38613);goog.dom.setTextContent(node_38614,value);
{
var G__38615 = seq__38606_38610;
var G__38616 = chunk__38607_38611;
var G__38617 = count__38608_38612;
var G__38618 = (i__38609_38613 + 1);
seq__38606_38610 = G__38615;
chunk__38607_38611 = G__38616;
count__38608_38612 = G__38617;
i__38609_38613 = G__38618;
continue;
}
} else
{var temp__4092__auto___38619 = cljs.core.seq.call(null,seq__38606_38610);if(temp__4092__auto___38619)
{var seq__38606_38620__$1 = temp__4092__auto___38619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38606_38620__$1))
{var c__4148__auto___38621 = cljs.core.chunk_first.call(null,seq__38606_38620__$1);{
var G__38622 = cljs.core.chunk_rest.call(null,seq__38606_38620__$1);
var G__38623 = c__4148__auto___38621;
var G__38624 = cljs.core.count.call(null,c__4148__auto___38621);
var G__38625 = 0;
seq__38606_38610 = G__38622;
chunk__38607_38611 = G__38623;
count__38608_38612 = G__38624;
i__38609_38613 = G__38625;
continue;
}
} else
{var node_38626 = cljs.core.first.call(null,seq__38606_38620__$1);goog.dom.setTextContent(node_38626,value);
{
var G__38627 = cljs.core.next.call(null,seq__38606_38620__$1);
var G__38628 = null;
var G__38629 = 0;
var G__38630 = 0;
seq__38606_38610 = G__38627;
chunk__38607_38611 = G__38628;
count__38608_38612 = G__38629;
i__38609_38613 = G__38630;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__38635_38639 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38636_38640 = null;var count__38637_38641 = 0;var i__38638_38642 = 0;while(true){
if((i__38638_38642 < count__38637_38641))
{var node_38643 = cljs.core._nth.call(null,chunk__38636_38640,i__38638_38642);goog.dom.forms.setValue(node_38643,value);
{
var G__38644 = seq__38635_38639;
var G__38645 = chunk__38636_38640;
var G__38646 = count__38637_38641;
var G__38647 = (i__38638_38642 + 1);
seq__38635_38639 = G__38644;
chunk__38636_38640 = G__38645;
count__38637_38641 = G__38646;
i__38638_38642 = G__38647;
continue;
}
} else
{var temp__4092__auto___38648 = cljs.core.seq.call(null,seq__38635_38639);if(temp__4092__auto___38648)
{var seq__38635_38649__$1 = temp__4092__auto___38648;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38635_38649__$1))
{var c__4148__auto___38650 = cljs.core.chunk_first.call(null,seq__38635_38649__$1);{
var G__38651 = cljs.core.chunk_rest.call(null,seq__38635_38649__$1);
var G__38652 = c__4148__auto___38650;
var G__38653 = cljs.core.count.call(null,c__4148__auto___38650);
var G__38654 = 0;
seq__38635_38639 = G__38651;
chunk__38636_38640 = G__38652;
count__38637_38641 = G__38653;
i__38638_38642 = G__38654;
continue;
}
} else
{var node_38655 = cljs.core.first.call(null,seq__38635_38649__$1);goog.dom.forms.setValue(node_38655,value);
{
var G__38656 = cljs.core.next.call(null,seq__38635_38649__$1);
var G__38657 = null;
var G__38658 = 0;
var G__38659 = 0;
seq__38635_38639 = G__38656;
chunk__38636_38640 = G__38657;
count__38637_38641 = G__38658;
i__38638_38642 = G__38659;
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
{var value_38670 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__38666_38671 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38667_38672 = null;var count__38668_38673 = 0;var i__38669_38674 = 0;while(true){
if((i__38669_38674 < count__38668_38673))
{var node_38675 = cljs.core._nth.call(null,chunk__38667_38672,i__38669_38674);node_38675.innerHTML = value_38670;
{
var G__38676 = seq__38666_38671;
var G__38677 = chunk__38667_38672;
var G__38678 = count__38668_38673;
var G__38679 = (i__38669_38674 + 1);
seq__38666_38671 = G__38676;
chunk__38667_38672 = G__38677;
count__38668_38673 = G__38678;
i__38669_38674 = G__38679;
continue;
}
} else
{var temp__4092__auto___38680 = cljs.core.seq.call(null,seq__38666_38671);if(temp__4092__auto___38680)
{var seq__38666_38681__$1 = temp__4092__auto___38680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38666_38681__$1))
{var c__4148__auto___38682 = cljs.core.chunk_first.call(null,seq__38666_38681__$1);{
var G__38683 = cljs.core.chunk_rest.call(null,seq__38666_38681__$1);
var G__38684 = c__4148__auto___38682;
var G__38685 = cljs.core.count.call(null,c__4148__auto___38682);
var G__38686 = 0;
seq__38666_38671 = G__38683;
chunk__38667_38672 = G__38684;
count__38668_38673 = G__38685;
i__38669_38674 = G__38686;
continue;
}
} else
{var node_38687 = cljs.core.first.call(null,seq__38666_38681__$1);node_38687.innerHTML = value_38670;
{
var G__38688 = cljs.core.next.call(null,seq__38666_38681__$1);
var G__38689 = null;
var G__38690 = 0;
var G__38691 = 0;
seq__38666_38671 = G__38688;
chunk__38667_38672 = G__38689;
count__38668_38673 = G__38690;
i__38669_38674 = G__38691;
continue;
}
}
} else
{}
}
break;
}
}catch (e38665){if((e38665 instanceof Error))
{var e_38692 = e38665;domina.replace_children_BANG_.call(null,content,value_38670);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38665;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__38699_38703 = cljs.core.seq.call(null,children);var chunk__38700_38704 = null;var count__38701_38705 = 0;var i__38702_38706 = 0;while(true){
if((i__38702_38706 < count__38701_38705))
{var child_38707 = cljs.core._nth.call(null,chunk__38700_38704,i__38702_38706);frag.appendChild(child_38707);
{
var G__38708 = seq__38699_38703;
var G__38709 = chunk__38700_38704;
var G__38710 = count__38701_38705;
var G__38711 = (i__38702_38706 + 1);
seq__38699_38703 = G__38708;
chunk__38700_38704 = G__38709;
count__38701_38705 = G__38710;
i__38702_38706 = G__38711;
continue;
}
} else
{var temp__4092__auto___38712 = cljs.core.seq.call(null,seq__38699_38703);if(temp__4092__auto___38712)
{var seq__38699_38713__$1 = temp__4092__auto___38712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38699_38713__$1))
{var c__4148__auto___38714 = cljs.core.chunk_first.call(null,seq__38699_38713__$1);{
var G__38715 = cljs.core.chunk_rest.call(null,seq__38699_38713__$1);
var G__38716 = c__4148__auto___38714;
var G__38717 = cljs.core.count.call(null,c__4148__auto___38714);
var G__38718 = 0;
seq__38699_38703 = G__38715;
chunk__38700_38704 = G__38716;
count__38701_38705 = G__38717;
i__38702_38706 = G__38718;
continue;
}
} else
{var child_38719 = cljs.core.first.call(null,seq__38699_38713__$1);frag.appendChild(child_38719);
{
var G__38720 = cljs.core.next.call(null,seq__38699_38713__$1);
var G__38721 = null;
var G__38722 = 0;
var G__38723 = 0;
seq__38699_38703 = G__38720;
chunk__38700_38704 = G__38721;
count__38701_38705 = G__38722;
i__38702_38706 = G__38723;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__38693_SHARP_,p2__38694_SHARP_){return f.call(null,p1__38693_SHARP_,p2__38694_SHARP_);
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
{if((function (){var G__38725 = list_thing;if(G__38725)
{var bit__4050__auto__ = (G__38725.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38725.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38725.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38725);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38725);
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
{if((function (){var G__38726 = content;if(G__38726)
{var bit__4050__auto__ = (G__38726.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38726.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38726.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38726);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38726);
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
{if((function (){var G__38727 = content;if(G__38727)
{var bit__4050__auto__ = (G__38727.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__38727.cljs$core$ISeqable$))
{return true;
} else
{if((!G__38727.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38727);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__38727);
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
