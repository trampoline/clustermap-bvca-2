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
var opt_wrapper_29010 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_29011 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_29012 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_29012,opt_wrapper_29010,table_section_wrapper_29011,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_29010,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_29011,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_29011,cell_wrapper_29012,table_section_wrapper_29011,table_section_wrapper_29011]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3529__auto__ = div.firstChild;if(cljs.core.truth_(and__3529__auto__))
{return div.firstChild.childNodes;
} else
{return and__3529__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__29017 = cljs.core.seq.call(null,tbody);var chunk__29018 = null;var count__29019 = 0;var i__29020 = 0;while(true){
if((i__29020 < count__29019))
{var child = cljs.core._nth.call(null,chunk__29018,i__29020);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__29021 = seq__29017;
var G__29022 = chunk__29018;
var G__29023 = count__29019;
var G__29024 = (i__29020 + 1);
seq__29017 = G__29021;
chunk__29018 = G__29022;
count__29019 = G__29023;
i__29020 = G__29024;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29017);if(temp__4126__auto__)
{var seq__29017__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29017__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__29017__$1);{
var G__29025 = cljs.core.chunk_rest.call(null,seq__29017__$1);
var G__29026 = c__4297__auto__;
var G__29027 = cljs.core.count.call(null,c__4297__auto__);
var G__29028 = 0;
seq__29017 = G__29025;
chunk__29018 = G__29026;
count__29019 = G__29027;
i__29020 = G__29028;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__29017__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__29029 = cljs.core.next.call(null,seq__29017__$1);
var G__29030 = null;
var G__29031 = 0;
var G__29032 = 0;
seq__29017 = G__29029;
chunk__29018 = G__29030;
count__29019 = G__29031;
i__29020 = G__29032;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__29034 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__29034,0,null);var start_wrap = cljs.core.nth.call(null,vec__29034,1,null);var end_wrap = cljs.core.nth.call(null,vec__29034,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__29035 = wrapper.lastChild;
var G__29036 = (level - 1);
wrapper = G__29035;
level = G__29036;
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
domina.DomContent = (function (){var obj29038 = {};return obj29038;
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
log_debug.cljs$lang$applyTo = (function (arglist__29039){
var mesg = cljs.core.seq(arglist__29039);
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
log.cljs$lang$applyTo = (function (arglist__29040){
var mesg = cljs.core.seq(arglist__29040);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__29041){
var contents = cljs.core.seq(arglist__29041);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__29042_SHARP_){return p1__29042_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__29043_SHARP_,p2__29044_SHARP_){return goog.dom.insertChildAt(p1__29043_SHARP_,p2__29044_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__29046_SHARP_,p2__29045_SHARP_){return goog.dom.insertSiblingBefore(p2__29045_SHARP_,p1__29046_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__29048_SHARP_,p2__29047_SHARP_){return goog.dom.insertSiblingAfter(p2__29047_SHARP_,p1__29048_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__29050_SHARP_,p2__29049_SHARP_){return goog.dom.replaceNode(p2__29049_SHARP_,p1__29050_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__29055_29059 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29056_29060 = null;var count__29057_29061 = 0;var i__29058_29062 = 0;while(true){
if((i__29058_29062 < count__29057_29061))
{var n_29063 = cljs.core._nth.call(null,chunk__29056_29060,i__29058_29062);goog.style.setStyle(n_29063,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29064 = seq__29055_29059;
var G__29065 = chunk__29056_29060;
var G__29066 = count__29057_29061;
var G__29067 = (i__29058_29062 + 1);
seq__29055_29059 = G__29064;
chunk__29056_29060 = G__29065;
count__29057_29061 = G__29066;
i__29058_29062 = G__29067;
continue;
}
} else
{var temp__4126__auto___29068 = cljs.core.seq.call(null,seq__29055_29059);if(temp__4126__auto___29068)
{var seq__29055_29069__$1 = temp__4126__auto___29068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29055_29069__$1))
{var c__4297__auto___29070 = cljs.core.chunk_first.call(null,seq__29055_29069__$1);{
var G__29071 = cljs.core.chunk_rest.call(null,seq__29055_29069__$1);
var G__29072 = c__4297__auto___29070;
var G__29073 = cljs.core.count.call(null,c__4297__auto___29070);
var G__29074 = 0;
seq__29055_29059 = G__29071;
chunk__29056_29060 = G__29072;
count__29057_29061 = G__29073;
i__29058_29062 = G__29074;
continue;
}
} else
{var n_29075 = cljs.core.first.call(null,seq__29055_29069__$1);goog.style.setStyle(n_29075,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29076 = cljs.core.next.call(null,seq__29055_29069__$1);
var G__29077 = null;
var G__29078 = 0;
var G__29079 = 0;
seq__29055_29059 = G__29076;
chunk__29056_29060 = G__29077;
count__29057_29061 = G__29078;
i__29058_29062 = G__29079;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__29080){
var content = cljs.core.first(arglist__29080);
arglist__29080 = cljs.core.next(arglist__29080);
var name = cljs.core.first(arglist__29080);
var value = cljs.core.rest(arglist__29080);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__29085_29089 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29086_29090 = null;var count__29087_29091 = 0;var i__29088_29092 = 0;while(true){
if((i__29088_29092 < count__29087_29091))
{var n_29093 = cljs.core._nth.call(null,chunk__29086_29090,i__29088_29092);n_29093.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29094 = seq__29085_29089;
var G__29095 = chunk__29086_29090;
var G__29096 = count__29087_29091;
var G__29097 = (i__29088_29092 + 1);
seq__29085_29089 = G__29094;
chunk__29086_29090 = G__29095;
count__29087_29091 = G__29096;
i__29088_29092 = G__29097;
continue;
}
} else
{var temp__4126__auto___29098 = cljs.core.seq.call(null,seq__29085_29089);if(temp__4126__auto___29098)
{var seq__29085_29099__$1 = temp__4126__auto___29098;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29085_29099__$1))
{var c__4297__auto___29100 = cljs.core.chunk_first.call(null,seq__29085_29099__$1);{
var G__29101 = cljs.core.chunk_rest.call(null,seq__29085_29099__$1);
var G__29102 = c__4297__auto___29100;
var G__29103 = cljs.core.count.call(null,c__4297__auto___29100);
var G__29104 = 0;
seq__29085_29089 = G__29101;
chunk__29086_29090 = G__29102;
count__29087_29091 = G__29103;
i__29088_29092 = G__29104;
continue;
}
} else
{var n_29105 = cljs.core.first.call(null,seq__29085_29099__$1);n_29105.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__29106 = cljs.core.next.call(null,seq__29085_29099__$1);
var G__29107 = null;
var G__29108 = 0;
var G__29109 = 0;
seq__29085_29089 = G__29106;
chunk__29086_29090 = G__29107;
count__29087_29091 = G__29108;
i__29088_29092 = G__29109;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__29110){
var content = cljs.core.first(arglist__29110);
arglist__29110 = cljs.core.next(arglist__29110);
var name = cljs.core.first(arglist__29110);
var value = cljs.core.rest(arglist__29110);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__29115_29119 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29116_29120 = null;var count__29117_29121 = 0;var i__29118_29122 = 0;while(true){
if((i__29118_29122 < count__29117_29121))
{var n_29123 = cljs.core._nth.call(null,chunk__29116_29120,i__29118_29122);n_29123.removeAttribute(cljs.core.name.call(null,name));
{
var G__29124 = seq__29115_29119;
var G__29125 = chunk__29116_29120;
var G__29126 = count__29117_29121;
var G__29127 = (i__29118_29122 + 1);
seq__29115_29119 = G__29124;
chunk__29116_29120 = G__29125;
count__29117_29121 = G__29126;
i__29118_29122 = G__29127;
continue;
}
} else
{var temp__4126__auto___29128 = cljs.core.seq.call(null,seq__29115_29119);if(temp__4126__auto___29128)
{var seq__29115_29129__$1 = temp__4126__auto___29128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29115_29129__$1))
{var c__4297__auto___29130 = cljs.core.chunk_first.call(null,seq__29115_29129__$1);{
var G__29131 = cljs.core.chunk_rest.call(null,seq__29115_29129__$1);
var G__29132 = c__4297__auto___29130;
var G__29133 = cljs.core.count.call(null,c__4297__auto___29130);
var G__29134 = 0;
seq__29115_29119 = G__29131;
chunk__29116_29120 = G__29132;
count__29117_29121 = G__29133;
i__29118_29122 = G__29134;
continue;
}
} else
{var n_29135 = cljs.core.first.call(null,seq__29115_29129__$1);n_29135.removeAttribute(cljs.core.name.call(null,name));
{
var G__29136 = cljs.core.next.call(null,seq__29115_29129__$1);
var G__29137 = null;
var G__29138 = 0;
var G__29139 = 0;
seq__29115_29119 = G__29136;
chunk__29116_29120 = G__29137;
count__29117_29121 = G__29138;
i__29118_29122 = G__29139;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__29141 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__29141,0,null);var v = cljs.core.nth.call(null,vec__29141,1,null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
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
return (function (p1__29142_SHARP_){var attr = attrs__$1.item(p1__29142_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__29149_29155 = cljs.core.seq.call(null,styles);var chunk__29150_29156 = null;var count__29151_29157 = 0;var i__29152_29158 = 0;while(true){
if((i__29152_29158 < count__29151_29157))
{var vec__29153_29159 = cljs.core._nth.call(null,chunk__29150_29156,i__29152_29158);var name_29160 = cljs.core.nth.call(null,vec__29153_29159,0,null);var value_29161 = cljs.core.nth.call(null,vec__29153_29159,1,null);domina.set_style_BANG_.call(null,content,name_29160,value_29161);
{
var G__29162 = seq__29149_29155;
var G__29163 = chunk__29150_29156;
var G__29164 = count__29151_29157;
var G__29165 = (i__29152_29158 + 1);
seq__29149_29155 = G__29162;
chunk__29150_29156 = G__29163;
count__29151_29157 = G__29164;
i__29152_29158 = G__29165;
continue;
}
} else
{var temp__4126__auto___29166 = cljs.core.seq.call(null,seq__29149_29155);if(temp__4126__auto___29166)
{var seq__29149_29167__$1 = temp__4126__auto___29166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29149_29167__$1))
{var c__4297__auto___29168 = cljs.core.chunk_first.call(null,seq__29149_29167__$1);{
var G__29169 = cljs.core.chunk_rest.call(null,seq__29149_29167__$1);
var G__29170 = c__4297__auto___29168;
var G__29171 = cljs.core.count.call(null,c__4297__auto___29168);
var G__29172 = 0;
seq__29149_29155 = G__29169;
chunk__29150_29156 = G__29170;
count__29151_29157 = G__29171;
i__29152_29158 = G__29172;
continue;
}
} else
{var vec__29154_29173 = cljs.core.first.call(null,seq__29149_29167__$1);var name_29174 = cljs.core.nth.call(null,vec__29154_29173,0,null);var value_29175 = cljs.core.nth.call(null,vec__29154_29173,1,null);domina.set_style_BANG_.call(null,content,name_29174,value_29175);
{
var G__29176 = cljs.core.next.call(null,seq__29149_29167__$1);
var G__29177 = null;
var G__29178 = 0;
var G__29179 = 0;
seq__29149_29155 = G__29176;
chunk__29150_29156 = G__29177;
count__29151_29157 = G__29178;
i__29152_29158 = G__29179;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__29186_29192 = cljs.core.seq.call(null,attrs);var chunk__29187_29193 = null;var count__29188_29194 = 0;var i__29189_29195 = 0;while(true){
if((i__29189_29195 < count__29188_29194))
{var vec__29190_29196 = cljs.core._nth.call(null,chunk__29187_29193,i__29189_29195);var name_29197 = cljs.core.nth.call(null,vec__29190_29196,0,null);var value_29198 = cljs.core.nth.call(null,vec__29190_29196,1,null);domina.set_attr_BANG_.call(null,content,name_29197,value_29198);
{
var G__29199 = seq__29186_29192;
var G__29200 = chunk__29187_29193;
var G__29201 = count__29188_29194;
var G__29202 = (i__29189_29195 + 1);
seq__29186_29192 = G__29199;
chunk__29187_29193 = G__29200;
count__29188_29194 = G__29201;
i__29189_29195 = G__29202;
continue;
}
} else
{var temp__4126__auto___29203 = cljs.core.seq.call(null,seq__29186_29192);if(temp__4126__auto___29203)
{var seq__29186_29204__$1 = temp__4126__auto___29203;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29186_29204__$1))
{var c__4297__auto___29205 = cljs.core.chunk_first.call(null,seq__29186_29204__$1);{
var G__29206 = cljs.core.chunk_rest.call(null,seq__29186_29204__$1);
var G__29207 = c__4297__auto___29205;
var G__29208 = cljs.core.count.call(null,c__4297__auto___29205);
var G__29209 = 0;
seq__29186_29192 = G__29206;
chunk__29187_29193 = G__29207;
count__29188_29194 = G__29208;
i__29189_29195 = G__29209;
continue;
}
} else
{var vec__29191_29210 = cljs.core.first.call(null,seq__29186_29204__$1);var name_29211 = cljs.core.nth.call(null,vec__29191_29210,0,null);var value_29212 = cljs.core.nth.call(null,vec__29191_29210,1,null);domina.set_attr_BANG_.call(null,content,name_29211,value_29212);
{
var G__29213 = cljs.core.next.call(null,seq__29186_29204__$1);
var G__29214 = null;
var G__29215 = 0;
var G__29216 = 0;
seq__29186_29192 = G__29213;
chunk__29187_29193 = G__29214;
count__29188_29194 = G__29215;
i__29189_29195 = G__29216;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__29221_29225 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29222_29226 = null;var count__29223_29227 = 0;var i__29224_29228 = 0;while(true){
if((i__29224_29228 < count__29223_29227))
{var node_29229 = cljs.core._nth.call(null,chunk__29222_29226,i__29224_29228);goog.dom.classes.add(node_29229,class$);
{
var G__29230 = seq__29221_29225;
var G__29231 = chunk__29222_29226;
var G__29232 = count__29223_29227;
var G__29233 = (i__29224_29228 + 1);
seq__29221_29225 = G__29230;
chunk__29222_29226 = G__29231;
count__29223_29227 = G__29232;
i__29224_29228 = G__29233;
continue;
}
} else
{var temp__4126__auto___29234 = cljs.core.seq.call(null,seq__29221_29225);if(temp__4126__auto___29234)
{var seq__29221_29235__$1 = temp__4126__auto___29234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29221_29235__$1))
{var c__4297__auto___29236 = cljs.core.chunk_first.call(null,seq__29221_29235__$1);{
var G__29237 = cljs.core.chunk_rest.call(null,seq__29221_29235__$1);
var G__29238 = c__4297__auto___29236;
var G__29239 = cljs.core.count.call(null,c__4297__auto___29236);
var G__29240 = 0;
seq__29221_29225 = G__29237;
chunk__29222_29226 = G__29238;
count__29223_29227 = G__29239;
i__29224_29228 = G__29240;
continue;
}
} else
{var node_29241 = cljs.core.first.call(null,seq__29221_29235__$1);goog.dom.classes.add(node_29241,class$);
{
var G__29242 = cljs.core.next.call(null,seq__29221_29235__$1);
var G__29243 = null;
var G__29244 = 0;
var G__29245 = 0;
seq__29221_29225 = G__29242;
chunk__29222_29226 = G__29243;
count__29223_29227 = G__29244;
i__29224_29228 = G__29245;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__29250_29254 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29251_29255 = null;var count__29252_29256 = 0;var i__29253_29257 = 0;while(true){
if((i__29253_29257 < count__29252_29256))
{var node_29258 = cljs.core._nth.call(null,chunk__29251_29255,i__29253_29257);goog.dom.classes.remove(node_29258,class$);
{
var G__29259 = seq__29250_29254;
var G__29260 = chunk__29251_29255;
var G__29261 = count__29252_29256;
var G__29262 = (i__29253_29257 + 1);
seq__29250_29254 = G__29259;
chunk__29251_29255 = G__29260;
count__29252_29256 = G__29261;
i__29253_29257 = G__29262;
continue;
}
} else
{var temp__4126__auto___29263 = cljs.core.seq.call(null,seq__29250_29254);if(temp__4126__auto___29263)
{var seq__29250_29264__$1 = temp__4126__auto___29263;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29250_29264__$1))
{var c__4297__auto___29265 = cljs.core.chunk_first.call(null,seq__29250_29264__$1);{
var G__29266 = cljs.core.chunk_rest.call(null,seq__29250_29264__$1);
var G__29267 = c__4297__auto___29265;
var G__29268 = cljs.core.count.call(null,c__4297__auto___29265);
var G__29269 = 0;
seq__29250_29254 = G__29266;
chunk__29251_29255 = G__29267;
count__29252_29256 = G__29268;
i__29253_29257 = G__29269;
continue;
}
} else
{var node_29270 = cljs.core.first.call(null,seq__29250_29264__$1);goog.dom.classes.remove(node_29270,class$);
{
var G__29271 = cljs.core.next.call(null,seq__29250_29264__$1);
var G__29272 = null;
var G__29273 = 0;
var G__29274 = 0;
seq__29250_29254 = G__29271;
chunk__29251_29255 = G__29272;
count__29252_29256 = G__29273;
i__29253_29257 = G__29274;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__29279_29283 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29280_29284 = null;var count__29281_29285 = 0;var i__29282_29286 = 0;while(true){
if((i__29282_29286 < count__29281_29285))
{var node_29287 = cljs.core._nth.call(null,chunk__29280_29284,i__29282_29286);goog.dom.classes.toggle(node_29287,class$);
{
var G__29288 = seq__29279_29283;
var G__29289 = chunk__29280_29284;
var G__29290 = count__29281_29285;
var G__29291 = (i__29282_29286 + 1);
seq__29279_29283 = G__29288;
chunk__29280_29284 = G__29289;
count__29281_29285 = G__29290;
i__29282_29286 = G__29291;
continue;
}
} else
{var temp__4126__auto___29292 = cljs.core.seq.call(null,seq__29279_29283);if(temp__4126__auto___29292)
{var seq__29279_29293__$1 = temp__4126__auto___29292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29279_29293__$1))
{var c__4297__auto___29294 = cljs.core.chunk_first.call(null,seq__29279_29293__$1);{
var G__29295 = cljs.core.chunk_rest.call(null,seq__29279_29293__$1);
var G__29296 = c__4297__auto___29294;
var G__29297 = cljs.core.count.call(null,c__4297__auto___29294);
var G__29298 = 0;
seq__29279_29283 = G__29295;
chunk__29280_29284 = G__29296;
count__29281_29285 = G__29297;
i__29282_29286 = G__29298;
continue;
}
} else
{var node_29299 = cljs.core.first.call(null,seq__29279_29293__$1);goog.dom.classes.toggle(node_29299,class$);
{
var G__29300 = cljs.core.next.call(null,seq__29279_29293__$1);
var G__29301 = null;
var G__29302 = 0;
var G__29303 = 0;
seq__29279_29283 = G__29300;
chunk__29280_29284 = G__29301;
count__29281_29285 = G__29302;
i__29282_29286 = G__29303;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_29312__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__29308_29313 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29309_29314 = null;var count__29310_29315 = 0;var i__29311_29316 = 0;while(true){
if((i__29311_29316 < count__29310_29315))
{var node_29317 = cljs.core._nth.call(null,chunk__29309_29314,i__29311_29316);goog.dom.classes.set(node_29317,classes_29312__$1);
{
var G__29318 = seq__29308_29313;
var G__29319 = chunk__29309_29314;
var G__29320 = count__29310_29315;
var G__29321 = (i__29311_29316 + 1);
seq__29308_29313 = G__29318;
chunk__29309_29314 = G__29319;
count__29310_29315 = G__29320;
i__29311_29316 = G__29321;
continue;
}
} else
{var temp__4126__auto___29322 = cljs.core.seq.call(null,seq__29308_29313);if(temp__4126__auto___29322)
{var seq__29308_29323__$1 = temp__4126__auto___29322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29308_29323__$1))
{var c__4297__auto___29324 = cljs.core.chunk_first.call(null,seq__29308_29323__$1);{
var G__29325 = cljs.core.chunk_rest.call(null,seq__29308_29323__$1);
var G__29326 = c__4297__auto___29324;
var G__29327 = cljs.core.count.call(null,c__4297__auto___29324);
var G__29328 = 0;
seq__29308_29313 = G__29325;
chunk__29309_29314 = G__29326;
count__29310_29315 = G__29327;
i__29311_29316 = G__29328;
continue;
}
} else
{var node_29329 = cljs.core.first.call(null,seq__29308_29323__$1);goog.dom.classes.set(node_29329,classes_29312__$1);
{
var G__29330 = cljs.core.next.call(null,seq__29308_29323__$1);
var G__29331 = null;
var G__29332 = 0;
var G__29333 = 0;
seq__29308_29313 = G__29330;
chunk__29309_29314 = G__29331;
count__29310_29315 = G__29332;
i__29311_29316 = G__29333;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__29338_29342 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29339_29343 = null;var count__29340_29344 = 0;var i__29341_29345 = 0;while(true){
if((i__29341_29345 < count__29340_29344))
{var node_29346 = cljs.core._nth.call(null,chunk__29339_29343,i__29341_29345);goog.dom.setTextContent(node_29346,value);
{
var G__29347 = seq__29338_29342;
var G__29348 = chunk__29339_29343;
var G__29349 = count__29340_29344;
var G__29350 = (i__29341_29345 + 1);
seq__29338_29342 = G__29347;
chunk__29339_29343 = G__29348;
count__29340_29344 = G__29349;
i__29341_29345 = G__29350;
continue;
}
} else
{var temp__4126__auto___29351 = cljs.core.seq.call(null,seq__29338_29342);if(temp__4126__auto___29351)
{var seq__29338_29352__$1 = temp__4126__auto___29351;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29338_29352__$1))
{var c__4297__auto___29353 = cljs.core.chunk_first.call(null,seq__29338_29352__$1);{
var G__29354 = cljs.core.chunk_rest.call(null,seq__29338_29352__$1);
var G__29355 = c__4297__auto___29353;
var G__29356 = cljs.core.count.call(null,c__4297__auto___29353);
var G__29357 = 0;
seq__29338_29342 = G__29354;
chunk__29339_29343 = G__29355;
count__29340_29344 = G__29356;
i__29341_29345 = G__29357;
continue;
}
} else
{var node_29358 = cljs.core.first.call(null,seq__29338_29352__$1);goog.dom.setTextContent(node_29358,value);
{
var G__29359 = cljs.core.next.call(null,seq__29338_29352__$1);
var G__29360 = null;
var G__29361 = 0;
var G__29362 = 0;
seq__29338_29342 = G__29359;
chunk__29339_29343 = G__29360;
count__29340_29344 = G__29361;
i__29341_29345 = G__29362;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__29367_29371 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29368_29372 = null;var count__29369_29373 = 0;var i__29370_29374 = 0;while(true){
if((i__29370_29374 < count__29369_29373))
{var node_29375 = cljs.core._nth.call(null,chunk__29368_29372,i__29370_29374);goog.dom.forms.setValue(node_29375,value);
{
var G__29376 = seq__29367_29371;
var G__29377 = chunk__29368_29372;
var G__29378 = count__29369_29373;
var G__29379 = (i__29370_29374 + 1);
seq__29367_29371 = G__29376;
chunk__29368_29372 = G__29377;
count__29369_29373 = G__29378;
i__29370_29374 = G__29379;
continue;
}
} else
{var temp__4126__auto___29380 = cljs.core.seq.call(null,seq__29367_29371);if(temp__4126__auto___29380)
{var seq__29367_29381__$1 = temp__4126__auto___29380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29367_29381__$1))
{var c__4297__auto___29382 = cljs.core.chunk_first.call(null,seq__29367_29381__$1);{
var G__29383 = cljs.core.chunk_rest.call(null,seq__29367_29381__$1);
var G__29384 = c__4297__auto___29382;
var G__29385 = cljs.core.count.call(null,c__4297__auto___29382);
var G__29386 = 0;
seq__29367_29371 = G__29383;
chunk__29368_29372 = G__29384;
count__29369_29373 = G__29385;
i__29370_29374 = G__29386;
continue;
}
} else
{var node_29387 = cljs.core.first.call(null,seq__29367_29381__$1);goog.dom.forms.setValue(node_29387,value);
{
var G__29388 = cljs.core.next.call(null,seq__29367_29381__$1);
var G__29389 = null;
var G__29390 = 0;
var G__29391 = 0;
seq__29367_29371 = G__29388;
chunk__29368_29372 = G__29389;
count__29369_29373 = G__29390;
i__29370_29374 = G__29391;
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
{var value_29402 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__29398_29403 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29399_29404 = null;var count__29400_29405 = 0;var i__29401_29406 = 0;while(true){
if((i__29401_29406 < count__29400_29405))
{var node_29407 = cljs.core._nth.call(null,chunk__29399_29404,i__29401_29406);node_29407.innerHTML = value_29402;
{
var G__29408 = seq__29398_29403;
var G__29409 = chunk__29399_29404;
var G__29410 = count__29400_29405;
var G__29411 = (i__29401_29406 + 1);
seq__29398_29403 = G__29408;
chunk__29399_29404 = G__29409;
count__29400_29405 = G__29410;
i__29401_29406 = G__29411;
continue;
}
} else
{var temp__4126__auto___29412 = cljs.core.seq.call(null,seq__29398_29403);if(temp__4126__auto___29412)
{var seq__29398_29413__$1 = temp__4126__auto___29412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29398_29413__$1))
{var c__4297__auto___29414 = cljs.core.chunk_first.call(null,seq__29398_29413__$1);{
var G__29415 = cljs.core.chunk_rest.call(null,seq__29398_29413__$1);
var G__29416 = c__4297__auto___29414;
var G__29417 = cljs.core.count.call(null,c__4297__auto___29414);
var G__29418 = 0;
seq__29398_29403 = G__29415;
chunk__29399_29404 = G__29416;
count__29400_29405 = G__29417;
i__29401_29406 = G__29418;
continue;
}
} else
{var node_29419 = cljs.core.first.call(null,seq__29398_29413__$1);node_29419.innerHTML = value_29402;
{
var G__29420 = cljs.core.next.call(null,seq__29398_29413__$1);
var G__29421 = null;
var G__29422 = 0;
var G__29423 = 0;
seq__29398_29403 = G__29420;
chunk__29399_29404 = G__29421;
count__29400_29405 = G__29422;
i__29401_29406 = G__29423;
continue;
}
}
} else
{}
}
break;
}
}catch (e29397){if((e29397 instanceof Error))
{var e_29424 = e29397;domina.replace_children_BANG_.call(null,content,value_29402);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29397;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__29431_29435 = cljs.core.seq.call(null,children);var chunk__29432_29436 = null;var count__29433_29437 = 0;var i__29434_29438 = 0;while(true){
if((i__29434_29438 < count__29433_29437))
{var child_29439 = cljs.core._nth.call(null,chunk__29432_29436,i__29434_29438);frag.appendChild(child_29439);
{
var G__29440 = seq__29431_29435;
var G__29441 = chunk__29432_29436;
var G__29442 = count__29433_29437;
var G__29443 = (i__29434_29438 + 1);
seq__29431_29435 = G__29440;
chunk__29432_29436 = G__29441;
count__29433_29437 = G__29442;
i__29434_29438 = G__29443;
continue;
}
} else
{var temp__4126__auto___29444 = cljs.core.seq.call(null,seq__29431_29435);if(temp__4126__auto___29444)
{var seq__29431_29445__$1 = temp__4126__auto___29444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29431_29445__$1))
{var c__4297__auto___29446 = cljs.core.chunk_first.call(null,seq__29431_29445__$1);{
var G__29447 = cljs.core.chunk_rest.call(null,seq__29431_29445__$1);
var G__29448 = c__4297__auto___29446;
var G__29449 = cljs.core.count.call(null,c__4297__auto___29446);
var G__29450 = 0;
seq__29431_29435 = G__29447;
chunk__29432_29436 = G__29448;
count__29433_29437 = G__29449;
i__29434_29438 = G__29450;
continue;
}
} else
{var child_29451 = cljs.core.first.call(null,seq__29431_29445__$1);frag.appendChild(child_29451);
{
var G__29452 = cljs.core.next.call(null,seq__29431_29445__$1);
var G__29453 = null;
var G__29454 = 0;
var G__29455 = 0;
seq__29431_29435 = G__29452;
chunk__29432_29436 = G__29453;
count__29433_29437 = G__29454;
i__29434_29438 = G__29455;
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
return (function (p1__29425_SHARP_,p2__29426_SHARP_){return f.call(null,p1__29425_SHARP_,p2__29426_SHARP_);
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
{if((function (){var G__29457 = list_thing;if(G__29457)
{var bit__4191__auto__ = (G__29457.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4191__auto__) || (G__29457.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29457.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29457);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29457);
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
{if((function (){var G__29458 = content;if(G__29458)
{var bit__4191__auto__ = (G__29458.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4191__auto__) || (G__29458.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29458.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29458);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29458);
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
{if((function (){var G__29459 = content;if(G__29459)
{var bit__4191__auto__ = (G__29459.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4191__auto__) || (G__29459.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29459.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29459);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29459);
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
