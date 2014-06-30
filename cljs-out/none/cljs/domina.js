// Compiled by ClojureScript 0.0-2227
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
var opt_wrapper_51262 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_51263 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_51264 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_51264,opt_wrapper_51262,table_section_wrapper_51263,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_51262,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_51263,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_51263,cell_wrapper_51264,table_section_wrapper_51263,table_section_wrapper_51263]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3529__auto__ = div.firstChild;if(cljs.core.truth_(and__3529__auto__))
{return div.firstChild.childNodes;
} else
{return and__3529__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__51269 = cljs.core.seq.call(null,tbody);var chunk__51270 = null;var count__51271 = 0;var i__51272 = 0;while(true){
if((i__51272 < count__51271))
{var child = cljs.core._nth.call(null,chunk__51270,i__51272);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__51273 = seq__51269;
var G__51274 = chunk__51270;
var G__51275 = count__51271;
var G__51276 = (i__51272 + 1);
seq__51269 = G__51273;
chunk__51270 = G__51274;
count__51271 = G__51275;
i__51272 = G__51276;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51269);if(temp__4126__auto__)
{var seq__51269__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51269__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__51269__$1);{
var G__51277 = cljs.core.chunk_rest.call(null,seq__51269__$1);
var G__51278 = c__4297__auto__;
var G__51279 = cljs.core.count.call(null,c__4297__auto__);
var G__51280 = 0;
seq__51269 = G__51277;
chunk__51270 = G__51278;
count__51271 = G__51279;
i__51272 = G__51280;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__51269__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__51281 = cljs.core.next.call(null,seq__51269__$1);
var G__51282 = null;
var G__51283 = 0;
var G__51284 = 0;
seq__51269 = G__51281;
chunk__51270 = G__51282;
count__51271 = G__51283;
i__51272 = G__51284;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__51286 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__51286,0,null);var start_wrap = cljs.core.nth.call(null,vec__51286,1,null);var end_wrap = cljs.core.nth.call(null,vec__51286,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__51287 = wrapper.lastChild;
var G__51288 = (level - 1);
wrapper = G__51287;
level = G__51288;
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
if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3529__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3529__auto__;
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
domina.DomContent = (function (){var obj51290 = {};return obj51290;
})();
domina.nodes = (function nodes(content){if((function (){var and__3529__auto__ = content;if(and__3529__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3529__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4168__auto__ = (((content == null))?null:content);return (function (){var or__3541__auto__ = (domina.nodes[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.nodes["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3529__auto__ = nodeseq;if(and__3529__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3529__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4168__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3541__auto__ = (domina.single_node[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.single_node["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3529__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3529__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3529__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__51291){
var mesg = cljs.core.seq(arglist__51291);
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
log.cljs$lang$applyTo = (function (arglist__51292){
var mesg = cljs.core.seq(arglist__51292);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__51293){
var contents = cljs.core.seq(arglist__51293);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__51294_SHARP_){return p1__51294_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__51295_SHARP_,p2__51296_SHARP_){return goog.dom.insertChildAt(p1__51295_SHARP_,p2__51296_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__51298_SHARP_,p2__51297_SHARP_){return goog.dom.insertSiblingBefore(p2__51297_SHARP_,p1__51298_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__51300_SHARP_,p2__51299_SHARP_){return goog.dom.insertSiblingAfter(p2__51299_SHARP_,p1__51300_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__51302_SHARP_,p2__51301_SHARP_){return goog.dom.replaceNode(p2__51301_SHARP_,p1__51302_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__51307_51311 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51308_51312 = null;var count__51309_51313 = 0;var i__51310_51314 = 0;while(true){
if((i__51310_51314 < count__51309_51313))
{var n_51315 = cljs.core._nth.call(null,chunk__51308_51312,i__51310_51314);goog.style.setStyle(n_51315,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51316 = seq__51307_51311;
var G__51317 = chunk__51308_51312;
var G__51318 = count__51309_51313;
var G__51319 = (i__51310_51314 + 1);
seq__51307_51311 = G__51316;
chunk__51308_51312 = G__51317;
count__51309_51313 = G__51318;
i__51310_51314 = G__51319;
continue;
}
} else
{var temp__4126__auto___51320 = cljs.core.seq.call(null,seq__51307_51311);if(temp__4126__auto___51320)
{var seq__51307_51321__$1 = temp__4126__auto___51320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51307_51321__$1))
{var c__4297__auto___51322 = cljs.core.chunk_first.call(null,seq__51307_51321__$1);{
var G__51323 = cljs.core.chunk_rest.call(null,seq__51307_51321__$1);
var G__51324 = c__4297__auto___51322;
var G__51325 = cljs.core.count.call(null,c__4297__auto___51322);
var G__51326 = 0;
seq__51307_51311 = G__51323;
chunk__51308_51312 = G__51324;
count__51309_51313 = G__51325;
i__51310_51314 = G__51326;
continue;
}
} else
{var n_51327 = cljs.core.first.call(null,seq__51307_51321__$1);goog.style.setStyle(n_51327,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51328 = cljs.core.next.call(null,seq__51307_51321__$1);
var G__51329 = null;
var G__51330 = 0;
var G__51331 = 0;
seq__51307_51311 = G__51328;
chunk__51308_51312 = G__51329;
count__51309_51313 = G__51330;
i__51310_51314 = G__51331;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__51332){
var content = cljs.core.first(arglist__51332);
arglist__51332 = cljs.core.next(arglist__51332);
var name = cljs.core.first(arglist__51332);
var value = cljs.core.rest(arglist__51332);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__51337_51341 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51338_51342 = null;var count__51339_51343 = 0;var i__51340_51344 = 0;while(true){
if((i__51340_51344 < count__51339_51343))
{var n_51345 = cljs.core._nth.call(null,chunk__51338_51342,i__51340_51344);n_51345.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51346 = seq__51337_51341;
var G__51347 = chunk__51338_51342;
var G__51348 = count__51339_51343;
var G__51349 = (i__51340_51344 + 1);
seq__51337_51341 = G__51346;
chunk__51338_51342 = G__51347;
count__51339_51343 = G__51348;
i__51340_51344 = G__51349;
continue;
}
} else
{var temp__4126__auto___51350 = cljs.core.seq.call(null,seq__51337_51341);if(temp__4126__auto___51350)
{var seq__51337_51351__$1 = temp__4126__auto___51350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51337_51351__$1))
{var c__4297__auto___51352 = cljs.core.chunk_first.call(null,seq__51337_51351__$1);{
var G__51353 = cljs.core.chunk_rest.call(null,seq__51337_51351__$1);
var G__51354 = c__4297__auto___51352;
var G__51355 = cljs.core.count.call(null,c__4297__auto___51352);
var G__51356 = 0;
seq__51337_51341 = G__51353;
chunk__51338_51342 = G__51354;
count__51339_51343 = G__51355;
i__51340_51344 = G__51356;
continue;
}
} else
{var n_51357 = cljs.core.first.call(null,seq__51337_51351__$1);n_51357.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__51358 = cljs.core.next.call(null,seq__51337_51351__$1);
var G__51359 = null;
var G__51360 = 0;
var G__51361 = 0;
seq__51337_51341 = G__51358;
chunk__51338_51342 = G__51359;
count__51339_51343 = G__51360;
i__51340_51344 = G__51361;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__51362){
var content = cljs.core.first(arglist__51362);
arglist__51362 = cljs.core.next(arglist__51362);
var name = cljs.core.first(arglist__51362);
var value = cljs.core.rest(arglist__51362);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__51367_51371 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51368_51372 = null;var count__51369_51373 = 0;var i__51370_51374 = 0;while(true){
if((i__51370_51374 < count__51369_51373))
{var n_51375 = cljs.core._nth.call(null,chunk__51368_51372,i__51370_51374);n_51375.removeAttribute(cljs.core.name.call(null,name));
{
var G__51376 = seq__51367_51371;
var G__51377 = chunk__51368_51372;
var G__51378 = count__51369_51373;
var G__51379 = (i__51370_51374 + 1);
seq__51367_51371 = G__51376;
chunk__51368_51372 = G__51377;
count__51369_51373 = G__51378;
i__51370_51374 = G__51379;
continue;
}
} else
{var temp__4126__auto___51380 = cljs.core.seq.call(null,seq__51367_51371);if(temp__4126__auto___51380)
{var seq__51367_51381__$1 = temp__4126__auto___51380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51367_51381__$1))
{var c__4297__auto___51382 = cljs.core.chunk_first.call(null,seq__51367_51381__$1);{
var G__51383 = cljs.core.chunk_rest.call(null,seq__51367_51381__$1);
var G__51384 = c__4297__auto___51382;
var G__51385 = cljs.core.count.call(null,c__4297__auto___51382);
var G__51386 = 0;
seq__51367_51371 = G__51383;
chunk__51368_51372 = G__51384;
count__51369_51373 = G__51385;
i__51370_51374 = G__51386;
continue;
}
} else
{var n_51387 = cljs.core.first.call(null,seq__51367_51381__$1);n_51387.removeAttribute(cljs.core.name.call(null,name));
{
var G__51388 = cljs.core.next.call(null,seq__51367_51381__$1);
var G__51389 = null;
var G__51390 = 0;
var G__51391 = 0;
seq__51367_51371 = G__51388;
chunk__51368_51372 = G__51389;
count__51369_51373 = G__51390;
i__51370_51374 = G__51391;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__51393 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__51393,0,null);var v = cljs.core.nth.call(null,vec__51393,1,null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
{return v;
} else
{return and__3529__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__51394_SHARP_){var attr = attrs__$1.item(p1__51394_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__51401_51407 = cljs.core.seq.call(null,styles);var chunk__51402_51408 = null;var count__51403_51409 = 0;var i__51404_51410 = 0;while(true){
if((i__51404_51410 < count__51403_51409))
{var vec__51405_51411 = cljs.core._nth.call(null,chunk__51402_51408,i__51404_51410);var name_51412 = cljs.core.nth.call(null,vec__51405_51411,0,null);var value_51413 = cljs.core.nth.call(null,vec__51405_51411,1,null);domina.set_style_BANG_.call(null,content,name_51412,value_51413);
{
var G__51414 = seq__51401_51407;
var G__51415 = chunk__51402_51408;
var G__51416 = count__51403_51409;
var G__51417 = (i__51404_51410 + 1);
seq__51401_51407 = G__51414;
chunk__51402_51408 = G__51415;
count__51403_51409 = G__51416;
i__51404_51410 = G__51417;
continue;
}
} else
{var temp__4126__auto___51418 = cljs.core.seq.call(null,seq__51401_51407);if(temp__4126__auto___51418)
{var seq__51401_51419__$1 = temp__4126__auto___51418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51401_51419__$1))
{var c__4297__auto___51420 = cljs.core.chunk_first.call(null,seq__51401_51419__$1);{
var G__51421 = cljs.core.chunk_rest.call(null,seq__51401_51419__$1);
var G__51422 = c__4297__auto___51420;
var G__51423 = cljs.core.count.call(null,c__4297__auto___51420);
var G__51424 = 0;
seq__51401_51407 = G__51421;
chunk__51402_51408 = G__51422;
count__51403_51409 = G__51423;
i__51404_51410 = G__51424;
continue;
}
} else
{var vec__51406_51425 = cljs.core.first.call(null,seq__51401_51419__$1);var name_51426 = cljs.core.nth.call(null,vec__51406_51425,0,null);var value_51427 = cljs.core.nth.call(null,vec__51406_51425,1,null);domina.set_style_BANG_.call(null,content,name_51426,value_51427);
{
var G__51428 = cljs.core.next.call(null,seq__51401_51419__$1);
var G__51429 = null;
var G__51430 = 0;
var G__51431 = 0;
seq__51401_51407 = G__51428;
chunk__51402_51408 = G__51429;
count__51403_51409 = G__51430;
i__51404_51410 = G__51431;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__51438_51444 = cljs.core.seq.call(null,attrs);var chunk__51439_51445 = null;var count__51440_51446 = 0;var i__51441_51447 = 0;while(true){
if((i__51441_51447 < count__51440_51446))
{var vec__51442_51448 = cljs.core._nth.call(null,chunk__51439_51445,i__51441_51447);var name_51449 = cljs.core.nth.call(null,vec__51442_51448,0,null);var value_51450 = cljs.core.nth.call(null,vec__51442_51448,1,null);domina.set_attr_BANG_.call(null,content,name_51449,value_51450);
{
var G__51451 = seq__51438_51444;
var G__51452 = chunk__51439_51445;
var G__51453 = count__51440_51446;
var G__51454 = (i__51441_51447 + 1);
seq__51438_51444 = G__51451;
chunk__51439_51445 = G__51452;
count__51440_51446 = G__51453;
i__51441_51447 = G__51454;
continue;
}
} else
{var temp__4126__auto___51455 = cljs.core.seq.call(null,seq__51438_51444);if(temp__4126__auto___51455)
{var seq__51438_51456__$1 = temp__4126__auto___51455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51438_51456__$1))
{var c__4297__auto___51457 = cljs.core.chunk_first.call(null,seq__51438_51456__$1);{
var G__51458 = cljs.core.chunk_rest.call(null,seq__51438_51456__$1);
var G__51459 = c__4297__auto___51457;
var G__51460 = cljs.core.count.call(null,c__4297__auto___51457);
var G__51461 = 0;
seq__51438_51444 = G__51458;
chunk__51439_51445 = G__51459;
count__51440_51446 = G__51460;
i__51441_51447 = G__51461;
continue;
}
} else
{var vec__51443_51462 = cljs.core.first.call(null,seq__51438_51456__$1);var name_51463 = cljs.core.nth.call(null,vec__51443_51462,0,null);var value_51464 = cljs.core.nth.call(null,vec__51443_51462,1,null);domina.set_attr_BANG_.call(null,content,name_51463,value_51464);
{
var G__51465 = cljs.core.next.call(null,seq__51438_51456__$1);
var G__51466 = null;
var G__51467 = 0;
var G__51468 = 0;
seq__51438_51444 = G__51465;
chunk__51439_51445 = G__51466;
count__51440_51446 = G__51467;
i__51441_51447 = G__51468;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__51473_51477 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51474_51478 = null;var count__51475_51479 = 0;var i__51476_51480 = 0;while(true){
if((i__51476_51480 < count__51475_51479))
{var node_51481 = cljs.core._nth.call(null,chunk__51474_51478,i__51476_51480);goog.dom.classes.add(node_51481,class$);
{
var G__51482 = seq__51473_51477;
var G__51483 = chunk__51474_51478;
var G__51484 = count__51475_51479;
var G__51485 = (i__51476_51480 + 1);
seq__51473_51477 = G__51482;
chunk__51474_51478 = G__51483;
count__51475_51479 = G__51484;
i__51476_51480 = G__51485;
continue;
}
} else
{var temp__4126__auto___51486 = cljs.core.seq.call(null,seq__51473_51477);if(temp__4126__auto___51486)
{var seq__51473_51487__$1 = temp__4126__auto___51486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51473_51487__$1))
{var c__4297__auto___51488 = cljs.core.chunk_first.call(null,seq__51473_51487__$1);{
var G__51489 = cljs.core.chunk_rest.call(null,seq__51473_51487__$1);
var G__51490 = c__4297__auto___51488;
var G__51491 = cljs.core.count.call(null,c__4297__auto___51488);
var G__51492 = 0;
seq__51473_51477 = G__51489;
chunk__51474_51478 = G__51490;
count__51475_51479 = G__51491;
i__51476_51480 = G__51492;
continue;
}
} else
{var node_51493 = cljs.core.first.call(null,seq__51473_51487__$1);goog.dom.classes.add(node_51493,class$);
{
var G__51494 = cljs.core.next.call(null,seq__51473_51487__$1);
var G__51495 = null;
var G__51496 = 0;
var G__51497 = 0;
seq__51473_51477 = G__51494;
chunk__51474_51478 = G__51495;
count__51475_51479 = G__51496;
i__51476_51480 = G__51497;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__51502_51506 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51503_51507 = null;var count__51504_51508 = 0;var i__51505_51509 = 0;while(true){
if((i__51505_51509 < count__51504_51508))
{var node_51510 = cljs.core._nth.call(null,chunk__51503_51507,i__51505_51509);goog.dom.classes.remove(node_51510,class$);
{
var G__51511 = seq__51502_51506;
var G__51512 = chunk__51503_51507;
var G__51513 = count__51504_51508;
var G__51514 = (i__51505_51509 + 1);
seq__51502_51506 = G__51511;
chunk__51503_51507 = G__51512;
count__51504_51508 = G__51513;
i__51505_51509 = G__51514;
continue;
}
} else
{var temp__4126__auto___51515 = cljs.core.seq.call(null,seq__51502_51506);if(temp__4126__auto___51515)
{var seq__51502_51516__$1 = temp__4126__auto___51515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51502_51516__$1))
{var c__4297__auto___51517 = cljs.core.chunk_first.call(null,seq__51502_51516__$1);{
var G__51518 = cljs.core.chunk_rest.call(null,seq__51502_51516__$1);
var G__51519 = c__4297__auto___51517;
var G__51520 = cljs.core.count.call(null,c__4297__auto___51517);
var G__51521 = 0;
seq__51502_51506 = G__51518;
chunk__51503_51507 = G__51519;
count__51504_51508 = G__51520;
i__51505_51509 = G__51521;
continue;
}
} else
{var node_51522 = cljs.core.first.call(null,seq__51502_51516__$1);goog.dom.classes.remove(node_51522,class$);
{
var G__51523 = cljs.core.next.call(null,seq__51502_51516__$1);
var G__51524 = null;
var G__51525 = 0;
var G__51526 = 0;
seq__51502_51506 = G__51523;
chunk__51503_51507 = G__51524;
count__51504_51508 = G__51525;
i__51505_51509 = G__51526;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__51531_51535 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51532_51536 = null;var count__51533_51537 = 0;var i__51534_51538 = 0;while(true){
if((i__51534_51538 < count__51533_51537))
{var node_51539 = cljs.core._nth.call(null,chunk__51532_51536,i__51534_51538);goog.dom.classes.toggle(node_51539,class$);
{
var G__51540 = seq__51531_51535;
var G__51541 = chunk__51532_51536;
var G__51542 = count__51533_51537;
var G__51543 = (i__51534_51538 + 1);
seq__51531_51535 = G__51540;
chunk__51532_51536 = G__51541;
count__51533_51537 = G__51542;
i__51534_51538 = G__51543;
continue;
}
} else
{var temp__4126__auto___51544 = cljs.core.seq.call(null,seq__51531_51535);if(temp__4126__auto___51544)
{var seq__51531_51545__$1 = temp__4126__auto___51544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51531_51545__$1))
{var c__4297__auto___51546 = cljs.core.chunk_first.call(null,seq__51531_51545__$1);{
var G__51547 = cljs.core.chunk_rest.call(null,seq__51531_51545__$1);
var G__51548 = c__4297__auto___51546;
var G__51549 = cljs.core.count.call(null,c__4297__auto___51546);
var G__51550 = 0;
seq__51531_51535 = G__51547;
chunk__51532_51536 = G__51548;
count__51533_51537 = G__51549;
i__51534_51538 = G__51550;
continue;
}
} else
{var node_51551 = cljs.core.first.call(null,seq__51531_51545__$1);goog.dom.classes.toggle(node_51551,class$);
{
var G__51552 = cljs.core.next.call(null,seq__51531_51545__$1);
var G__51553 = null;
var G__51554 = 0;
var G__51555 = 0;
seq__51531_51535 = G__51552;
chunk__51532_51536 = G__51553;
count__51533_51537 = G__51554;
i__51534_51538 = G__51555;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_51564__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__51560_51565 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51561_51566 = null;var count__51562_51567 = 0;var i__51563_51568 = 0;while(true){
if((i__51563_51568 < count__51562_51567))
{var node_51569 = cljs.core._nth.call(null,chunk__51561_51566,i__51563_51568);goog.dom.classes.set(node_51569,classes_51564__$1);
{
var G__51570 = seq__51560_51565;
var G__51571 = chunk__51561_51566;
var G__51572 = count__51562_51567;
var G__51573 = (i__51563_51568 + 1);
seq__51560_51565 = G__51570;
chunk__51561_51566 = G__51571;
count__51562_51567 = G__51572;
i__51563_51568 = G__51573;
continue;
}
} else
{var temp__4126__auto___51574 = cljs.core.seq.call(null,seq__51560_51565);if(temp__4126__auto___51574)
{var seq__51560_51575__$1 = temp__4126__auto___51574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51560_51575__$1))
{var c__4297__auto___51576 = cljs.core.chunk_first.call(null,seq__51560_51575__$1);{
var G__51577 = cljs.core.chunk_rest.call(null,seq__51560_51575__$1);
var G__51578 = c__4297__auto___51576;
var G__51579 = cljs.core.count.call(null,c__4297__auto___51576);
var G__51580 = 0;
seq__51560_51565 = G__51577;
chunk__51561_51566 = G__51578;
count__51562_51567 = G__51579;
i__51563_51568 = G__51580;
continue;
}
} else
{var node_51581 = cljs.core.first.call(null,seq__51560_51575__$1);goog.dom.classes.set(node_51581,classes_51564__$1);
{
var G__51582 = cljs.core.next.call(null,seq__51560_51575__$1);
var G__51583 = null;
var G__51584 = 0;
var G__51585 = 0;
seq__51560_51565 = G__51582;
chunk__51561_51566 = G__51583;
count__51562_51567 = G__51584;
i__51563_51568 = G__51585;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__51590_51594 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51591_51595 = null;var count__51592_51596 = 0;var i__51593_51597 = 0;while(true){
if((i__51593_51597 < count__51592_51596))
{var node_51598 = cljs.core._nth.call(null,chunk__51591_51595,i__51593_51597);goog.dom.setTextContent(node_51598,value);
{
var G__51599 = seq__51590_51594;
var G__51600 = chunk__51591_51595;
var G__51601 = count__51592_51596;
var G__51602 = (i__51593_51597 + 1);
seq__51590_51594 = G__51599;
chunk__51591_51595 = G__51600;
count__51592_51596 = G__51601;
i__51593_51597 = G__51602;
continue;
}
} else
{var temp__4126__auto___51603 = cljs.core.seq.call(null,seq__51590_51594);if(temp__4126__auto___51603)
{var seq__51590_51604__$1 = temp__4126__auto___51603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51590_51604__$1))
{var c__4297__auto___51605 = cljs.core.chunk_first.call(null,seq__51590_51604__$1);{
var G__51606 = cljs.core.chunk_rest.call(null,seq__51590_51604__$1);
var G__51607 = c__4297__auto___51605;
var G__51608 = cljs.core.count.call(null,c__4297__auto___51605);
var G__51609 = 0;
seq__51590_51594 = G__51606;
chunk__51591_51595 = G__51607;
count__51592_51596 = G__51608;
i__51593_51597 = G__51609;
continue;
}
} else
{var node_51610 = cljs.core.first.call(null,seq__51590_51604__$1);goog.dom.setTextContent(node_51610,value);
{
var G__51611 = cljs.core.next.call(null,seq__51590_51604__$1);
var G__51612 = null;
var G__51613 = 0;
var G__51614 = 0;
seq__51590_51594 = G__51611;
chunk__51591_51595 = G__51612;
count__51592_51596 = G__51613;
i__51593_51597 = G__51614;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__51619_51623 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51620_51624 = null;var count__51621_51625 = 0;var i__51622_51626 = 0;while(true){
if((i__51622_51626 < count__51621_51625))
{var node_51627 = cljs.core._nth.call(null,chunk__51620_51624,i__51622_51626);goog.dom.forms.setValue(node_51627,value);
{
var G__51628 = seq__51619_51623;
var G__51629 = chunk__51620_51624;
var G__51630 = count__51621_51625;
var G__51631 = (i__51622_51626 + 1);
seq__51619_51623 = G__51628;
chunk__51620_51624 = G__51629;
count__51621_51625 = G__51630;
i__51622_51626 = G__51631;
continue;
}
} else
{var temp__4126__auto___51632 = cljs.core.seq.call(null,seq__51619_51623);if(temp__4126__auto___51632)
{var seq__51619_51633__$1 = temp__4126__auto___51632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51619_51633__$1))
{var c__4297__auto___51634 = cljs.core.chunk_first.call(null,seq__51619_51633__$1);{
var G__51635 = cljs.core.chunk_rest.call(null,seq__51619_51633__$1);
var G__51636 = c__4297__auto___51634;
var G__51637 = cljs.core.count.call(null,c__4297__auto___51634);
var G__51638 = 0;
seq__51619_51623 = G__51635;
chunk__51620_51624 = G__51636;
count__51621_51625 = G__51637;
i__51622_51626 = G__51638;
continue;
}
} else
{var node_51639 = cljs.core.first.call(null,seq__51619_51633__$1);goog.dom.forms.setValue(node_51639,value);
{
var G__51640 = cljs.core.next.call(null,seq__51619_51633__$1);
var G__51641 = null;
var G__51642 = 0;
var G__51643 = 0;
seq__51619_51623 = G__51640;
chunk__51620_51624 = G__51641;
count__51621_51625 = G__51642;
i__51622_51626 = G__51643;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3529__auto__ = allows_inner_html_QMARK_;if(and__3529__auto__)
{var and__3529__auto____$1 = (function (){var or__3541__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3529__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{var value_51654 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__51650_51655 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51651_51656 = null;var count__51652_51657 = 0;var i__51653_51658 = 0;while(true){
if((i__51653_51658 < count__51652_51657))
{var node_51659 = cljs.core._nth.call(null,chunk__51651_51656,i__51653_51658);node_51659.innerHTML = value_51654;
{
var G__51660 = seq__51650_51655;
var G__51661 = chunk__51651_51656;
var G__51662 = count__51652_51657;
var G__51663 = (i__51653_51658 + 1);
seq__51650_51655 = G__51660;
chunk__51651_51656 = G__51661;
count__51652_51657 = G__51662;
i__51653_51658 = G__51663;
continue;
}
} else
{var temp__4126__auto___51664 = cljs.core.seq.call(null,seq__51650_51655);if(temp__4126__auto___51664)
{var seq__51650_51665__$1 = temp__4126__auto___51664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51650_51665__$1))
{var c__4297__auto___51666 = cljs.core.chunk_first.call(null,seq__51650_51665__$1);{
var G__51667 = cljs.core.chunk_rest.call(null,seq__51650_51665__$1);
var G__51668 = c__4297__auto___51666;
var G__51669 = cljs.core.count.call(null,c__4297__auto___51666);
var G__51670 = 0;
seq__51650_51655 = G__51667;
chunk__51651_51656 = G__51668;
count__51652_51657 = G__51669;
i__51653_51658 = G__51670;
continue;
}
} else
{var node_51671 = cljs.core.first.call(null,seq__51650_51665__$1);node_51671.innerHTML = value_51654;
{
var G__51672 = cljs.core.next.call(null,seq__51650_51665__$1);
var G__51673 = null;
var G__51674 = 0;
var G__51675 = 0;
seq__51650_51655 = G__51672;
chunk__51651_51656 = G__51673;
count__51652_51657 = G__51674;
i__51653_51658 = G__51675;
continue;
}
}
} else
{}
}
break;
}
}catch (e51649){if((e51649 instanceof Error))
{var e_51676 = e51649;domina.replace_children_BANG_.call(null,content,value_51654);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e51649;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3529__auto__ = bubble;if(cljs.core.truth_(and__3529__auto__))
{return (value == null);
} else
{return and__3529__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3541__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__51683_51687 = cljs.core.seq.call(null,children);var chunk__51684_51688 = null;var count__51685_51689 = 0;var i__51686_51690 = 0;while(true){
if((i__51686_51690 < count__51685_51689))
{var child_51691 = cljs.core._nth.call(null,chunk__51684_51688,i__51686_51690);frag.appendChild(child_51691);
{
var G__51692 = seq__51683_51687;
var G__51693 = chunk__51684_51688;
var G__51694 = count__51685_51689;
var G__51695 = (i__51686_51690 + 1);
seq__51683_51687 = G__51692;
chunk__51684_51688 = G__51693;
count__51685_51689 = G__51694;
i__51686_51690 = G__51695;
continue;
}
} else
{var temp__4126__auto___51696 = cljs.core.seq.call(null,seq__51683_51687);if(temp__4126__auto___51696)
{var seq__51683_51697__$1 = temp__4126__auto___51696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51683_51697__$1))
{var c__4297__auto___51698 = cljs.core.chunk_first.call(null,seq__51683_51697__$1);{
var G__51699 = cljs.core.chunk_rest.call(null,seq__51683_51697__$1);
var G__51700 = c__4297__auto___51698;
var G__51701 = cljs.core.count.call(null,c__4297__auto___51698);
var G__51702 = 0;
seq__51683_51687 = G__51699;
chunk__51684_51688 = G__51700;
count__51685_51689 = G__51701;
i__51686_51690 = G__51702;
continue;
}
} else
{var child_51703 = cljs.core.first.call(null,seq__51683_51697__$1);frag.appendChild(child_51703);
{
var G__51704 = cljs.core.next.call(null,seq__51683_51697__$1);
var G__51705 = null;
var G__51706 = 0;
var G__51707 = 0;
seq__51683_51687 = G__51704;
chunk__51684_51688 = G__51705;
count__51685_51689 = G__51706;
i__51686_51690 = G__51707;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__51677_SHARP_,p2__51678_SHARP_){return f.call(null,p1__51677_SHARP_,p2__51678_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3529__auto__ = obj;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3529__auto____$1)
{return obj.length;
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
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
{if((function (){var G__51709 = list_thing;if(G__51709)
{var bit__4191__auto__ = (G__51709.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4191__auto__) || (G__51709.cljs$core$ISeqable$))
{return true;
} else
{if((!G__51709.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51709);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51709);
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
{if((function (){var G__51710 = content;if(G__51710)
{var bit__4191__auto__ = (G__51710.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4191__auto__) || (G__51710.cljs$core$ISeqable$))
{return true;
} else
{if((!G__51710.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51710);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51710);
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
{if((function (){var G__51711 = content;if(G__51711)
{var bit__4191__auto__ = (G__51711.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4191__auto__) || (G__51711.cljs$core$ISeqable$))
{return true;
} else
{if((!G__51711.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51711);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__51711);
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